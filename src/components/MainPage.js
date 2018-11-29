import React, { Component } from "react";
import axios from "axios";
import NavMainPage from "../components/NavMainPage";
import { Link } from "react-router-dom";
import AvailableSister from "./AvailableSister";

class MainPage extends Component {
  state = {
    sisters: [],
    displayedSisters: [],
    searchString: ""
  };

  _onSearchChanged = (text) => {
      this.setState({ searchString: text })
  }

  componentDidMount() {
    axios
      .get("http://localhost:1998/api/sisters")
      .then((data) => {
        console.log(data.data.sisters);
        this.setState({ 
          sisters: data.data.sisters,
          
         });
      })
      .catch((err) => console.error(err));
  }

  render() {
    // const displayedSisters = this.state.sisters.filter(sister => displayedSisters.city.includes(this.state.searchString));
    const allSisters = this.state.sisters.map((sister) => (
      <Link to={"/profile/" + sister._id}>
        <AvailableSister
          
          key={sister._id}
          // sister={sister}
          hashAvatar={sister.hashAvatar}
          firstname={sister.firstname}
          lastname={sister.lastname}
          city={sister.city}
          billingRate={sister.billingRate}
          experience={sister.experience}
          availability={sister.availability}
          note={sister.note}

          // key={displayedSisters._id}
          // // sister={sister}
          // hashAvatar={displayedSisters.hashAvatar}
          // firstname={displayedSisters.firstname}
          // lastname={displayedSisters.lastname}
          // city={displayedSisters.city}
          // billingRate={displayedSisters.billingRate}
          // experience={displayedSisters.experience}
          // availability={displayedSisters.availability}
          // note={displayedSisters.note}
        />
      </Link>
    ));
    return (
      <div>
        <NavMainPage onSearchChanged={this._onSearchChanged}/>
        <div className="">
          {/* {this.state.sisters.length > 0 ? this.state.sisters[0].fullname : ""} */}
          {allSisters}
        </div>
      </div>
    );
  }
}

export default MainPage;
