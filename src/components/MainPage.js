import React, { Component } from 'react';
import axios from 'axios';
import NavMainPage from '../components/NavMainPage';

class MainPage extends Component{

    state = {
        sisters: []
    };

    componentDidMount(){
        axios
        .get('http://localhost:1998/api/sisters')
        .then(data => {
            console.log(data.data);
            this.setState({ sisters: data.data.sisters});
        })
        .catch(err => console.error(err));
    }

    render() {
        return(
            <div>
                <NavMainPage />
            </div>
        )
    }
}

export default MainPage;