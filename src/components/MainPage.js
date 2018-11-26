import React, { Component } from 'react';
import axios from 'axios';

import config from '../config';


class MainPage extends Component{

    state = {
        sisters: []
    };

    componentDidMount(){
        axios
        .get(config.rootPath + '/api/sisters')
        .then(data => {
            console.log(data.data);
            this.setState({ sisters: data.data.sisters});
        })
        .catch(err => console.error(err));
    }

    render() {
        return(
            <div>
                {this.state.sisters.length > 0 ? this.state.sisters[0].avatar : '' }
            </div>
        )
    }
}

export default MainPage;