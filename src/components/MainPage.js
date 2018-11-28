import React, { Component } from "react";
import axios from "axios";
import NavMainPage from "../components/NavMainPage";
import AvailableSister from "./AvailableSister";

class MainPage extends Component {
  state = {
    sisters: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:1998/api/sisters")
      .then((data) => {
        console.log(data.data.sisters);
        this.setState({ sisters: data.data.sisters });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const allSisters = this.state.sisters.map((sister) => (
      <AvailableSister
        key={sister._id}
        // sister={sister}
        hashAvatar={sister.hashAvatar}
        firstname={sister.firstname}
        fullname={sister.fullname}
        city={sister.city}
        billingRate={sister.billingRate}
        experience={sister.experience}
        availability={sister.availability}
        note={sister.note}
      />
    ));
    return (
      <div>
        <NavMainPage />
        <div>
          {/* {this.state.sisters.length > 0 ? this.state.sisters[0].fullname : ""} */}
          {allSisters}
        </div>
      </div>
    );
  }
}

export default MainPage;
