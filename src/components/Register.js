import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Register extends Component{
    render(){
        return(
            <div className='container'>
                <h1>Who you are ?? </h1>
                <Link to={'/parent/register'}>
                    <Button> Parent </Button>
                </Link>
                <Link to={'/sister/register'}> 
                    <Button> Babysister </Button>
                </Link>
                
            </div>
        )
    }
}

export default Register;