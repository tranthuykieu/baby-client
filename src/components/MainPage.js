import React, { Component } from "react";
import axios from "axios";

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
        {this.state.parents.length > 0 ? this.state.parents[0].fullname : ""}
      </div>
    );
  }
}

export default MainPage;
