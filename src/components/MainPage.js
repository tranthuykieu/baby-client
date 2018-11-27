import React, { Component } from "react";
import axios from "axios";
import NavMainPage from "../components/NavMainPage";

class MainPage extends Component {
  state = {
    parents: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:1998/api/parents")
      .then((data) => {
        console.log(data.data);
        this.setState({ parents: data.data.parents });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <NavMainPage />
        <div>
          {this.state.parents.length > 0 ? this.state.parents[0].fullname : ""}
        </div>
      </div>
    );
  }
}

export default MainPage;
