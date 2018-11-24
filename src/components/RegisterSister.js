import React, { Component } from 'react';
import { FormGroup, Form, Label, CardTitle, 
    Input, Nav, Button } from 'reactstrap';
import axios from 'axios';




class RegisterSister extends Component {

    componentDidMount(){

    }

    state = {
        sister: {
            phoneNumber: '',
            password: '',
            fullname: '',
            city: '',
            district: '',
            address: '',
            sex: '',
            age: '',
            email: '',
            note: ''
        }
    }

    _handleChange = (e) => {
        var preSister = this.state.sister;
        console.log('id: ' + e.target.id);
        if (e.target.id == 0) preSister.phoneNumber = e.target.value;
        if (e.target.id == 1) preSister.password = e.target.value;
        if (e.target.id == 2) preSister.fullname = e.target.value;
        if (e.target.id == 3) preSister.address = e.target.value;
        if (e.target.id == 4) preSister.district = e.target.value;
        if (e.target.id == 5) preSister.city = e.target.value;
        if (e.target.id == 6) preSister.sex = e.target.value;
        if (e.target.id == 7) preSister.age = e.target.value;
        if (e.target.id == 8) preSister.email = e.target.value;
        if (e.target.id == 9) preSister.avatar = e.target.value;
        if (e.target.id == 10) preSister.note = e.target.value;
        
        this.setState({ sister: preSister })
    }

    _handleFileUpload({}) {
        // add code to upload file from PC
    }

    _handleRegister = (e) => {
        
        console.log(this.state.sister);
        axios.post('http://localhost:1998/api/sisters', this.state.sister )
            .then( res => {
                console.log(res);
                this.props.history.push('/mainpage');
            })
            .catch(err => console.log(err));
    }


    render() {
        return(
            <div className='container'>
                <FormGroup>
                    <CardTitle> BABYSISTER REGISTER </CardTitle>
                    <Form >

                        <Nav>
                            <Label>Phone Number: </Label>
                            <Input onChange={this._handleChange} type='text' id='0' required></Input>
                        </Nav>
                        <Nav>
                            <Label> Password: </Label>
                            <Input onChange={this._handleChange} type='password' id='1' required></Input>
                        </Nav>
                        <Nav>
                            <Label>Fullname: </Label>
                            <Input onChange={this._handleChange} type='text' id='2' required></Input>
                        </Nav>
                        <Nav>
                            <Label>City: </Label>
                            <Input onChange={this._handleChange} type='text' id='5' required></Input>
                        </Nav>
                        <Nav>
                            <Label>District: </Label>
                            <Input onChange={this._handleChange} type='text' id='4' required></Input>
                        </Nav>
                        <Nav>
                            <Label> Address: </Label>
                            <Input onChange={this._handleChange} type='text' id='3' required></Input>
                        </Nav>    
                        <Nav>
                            <Label>Sex: </Label>
                            <Input onChange={this._handleChange} type='select' id='6' required>
                                <option></option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>LGBT</option>
                            </Input>
                        </Nav>
                        <Nav>
                            <Label>Age: </Label>
                            <Input onChange={this._handleChange} type='number' id='7' required></Input>
                        </Nav>
                        <Nav>
                            <Label>Email: </Label>
                            <Input onChange={this._handleChange} type='text' id='8'></Input>
                        </Nav>

                        <Nav>
                            <Label>Avatar: </Label>
                            <Input onChange={this._handleFileUpload} type='file' id='9'></Input>
                        </Nav>
                        
                        <Nav>
                            <Label>Note: </Label>
                            <Input onChange={this._handleChange} type='text' id='10' maxLenght='200'></Input>
                        </Nav>
                        
                    </Form>

                    <Button type='submit' onClick={this._handleRegister} className='' > Register </Button>
                </FormGroup>
            </div>
        )
    }
}

export default RegisterSister;