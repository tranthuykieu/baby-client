import React, { Component } from 'react';
import { FormGroup, Form, Label, CardTitle, 
        Input, Nav, Button } from 'reactstrap';


class RegisterParent extends Component {

    state = {
        parent: {
            
        }
    }

    _handleChange = (e) => {

    }

    _handleRegister = (e) => {

    }


    render() {
        return(
            <div>
                <FormGroup>
                    <CardTitle> REGISTER </CardTitle>
                    <Form>
                        <Nav>
                            <Label> Username: </Label>
                            <Input onChange={this.handleChange} type='text' if='' required> </Input>
                        </Nav>
                        <Nav>
                            <Label> Password: </Label>
                            <Input onChange={this.handleChange} type='password' required></Input>
                        </Nav>
                        <Nav>
                            <Label>Fullname: </Label>
                            <Input onChange={this.handleChange} type='text' required></Input>
                        </Nav>
                        <Nav>
                            <Label> Address: </Label>
                            <Input onChange={this.handleChange} type='text' required></Input>
                        </Nav>
                        <Nav>
                            <Label>District: </Label>
                        </Nav>
                    </Form>

                    <Button> Register </Button>
                </FormGroup>
            </div>
        )
    }
}

export default RegisterParent;