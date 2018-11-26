import React, { Component } from 'react';
import axios from 'axios';


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
                {this.state.sisters.length > 0 ? this.state.sisters[1].avatar : '' }
            </div>
        )
    }
}

export default MainPage;