import React, { Component } from "react";
import axios from "axios";
import NavMainPage from "../components/NavMainPage";
import AvailableSister from './AvailableSister';

class MainPage extends Component {


  componentDidMount() {
    axios
      .get("http://localhost:1998/api/sisters")
      .then((data) => {
        console.log(data.data);
        // this.setState({ sisters: data.data.sisters });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <NavMainPage/>
        <div>
          {this.state.sisters.length > 0 ? this.state.sisters[0].fullname : ""}

        </div>
      </div>
    );
  }
}

export default MainPage;
