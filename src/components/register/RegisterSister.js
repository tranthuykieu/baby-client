import React, { Component } from 'react';
import {Container, FormGroup, Form, Label, CardTitle, 
    Input, Nav, Button, Row, Col, FormText } from 'reactstrap';
import axios from 'axios';

var text_center = {
    textAlign: "center"
}

var form_style = {
    width: "700px",
    margin: "auto",
    background: "#eeeeee",
    padding: "20px"
}





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

    _handleFileUpload(e) {
        // add code to upload file from PC
        console.log(e.target.files[0]);
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
            <div>
                <Container>
                <CardTitle style={text_center}> BABYSISTER REGISTER </CardTitle>

                <Form  style={form_style}>
                    <FormGroup>
                        <Label>Fullname: </Label>
                        <Input onChange={this._handleChange} type='text' id='2' required></Input>
                    </FormGroup>

                    <Row form>
                        <Col>
                            <FormGroup>
                                <Label>Phone Number: </Label>
                                <Input onChange={this._handleChange} type='text' id='0' required></Input>
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label> Password: </Label>
                                <Input onChange={this._handleChange} type='password' id='1' required></Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col>
                            <FormGroup>
                                <Label>Sex: </Label>
                                <Input onChange={this._handleChange} type='select' id='6' required>
                                    <option></option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>LGBT</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Age: </Label>
                                <Input onChange={this._handleChange} type='number' id='7' required></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                        
                        
                        
                        <FormGroup>
                            <Label>City: </Label>
                            <Input onChange={this._handleChange} type='text' id='5' required></Input>
                            </FormGroup>
                        <FormGroup>
                            <Label>District: </Label>
                            <Input onChange={this._handleChange} type='text' id='4' required></Input>
                            </FormGroup>
                        <FormGroup>
                            <Label> Address: </Label>
                            <Input onChange={this._handleChange} type='text' id='3' required></Input>
                        </FormGroup>   
                        
                        
                        <FormGroup>
                            <Label>Email: </Label>
                            <Input onChange={this._handleChange} type='text' id='8'></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>Avatar: </Label>
                            {/* <Input onChange={this._handleFileUpload} type='file' id='9'></Input> */}
                            <Input onChange={this._handleChange} type='text' id='9'></Input> 
                        </FormGroup>
                        
                        <FormGroup>
                            <Label>Note: </Label>
                            <Input onChange={this._handleChange} type='textarea' id='10' maxLenght='200'></Input>
                        </FormGroup>
                        
                    

                    <Button type='submit' onClick={this._handleRegister} className='' > Register </Button>
                    </Form> 
                    </Container>
            </div>
        )
    }
}

export default RegisterSister;