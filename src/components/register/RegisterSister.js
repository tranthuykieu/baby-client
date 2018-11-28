import React, { Component } from "react";
import { FormGroup, Input, CardTitle, Button } from "reactstrap";
import axios from "axios";
import styled from "styled-components";
import Example from "../Nav";
import begin from "../../img/begin.jpeg";

const minOffset = 18;
const maxOffset = 60;

const Label = styled.label`
  width: 140px;
  height: auto;
`;

var background1 = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${begin})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat bottom",
  backgroundSize: "cover",
  opacity: "0.9",
  backgroundAttachment: "fixed"
};

const button = {
  margin: "10px 0px 0px 0px"
};

const thisYear = new Date().getFullYear();

class RegisterSister extends Component {
  componentDidMount() {}

  state = {
    sister: {
      phoneNumber: "",
      password: "",
      firstname: "",
      lastname: "",
      city: "",
      district: "",
      address: "",
      sex: "",
      age: "",
      email: "",
      avatar: "",
      note: ""
    },
    avatar: null,
    preview: null,
    thisYear: thisYear,
    selectedYear: thisYear
  };

  _handleYearChange = (evt) => {
    // Handle Change Here
    // alert(evt.target.value);
    this.setState({ selectedYear: evt.target.value });
  };

  _handleChange = (e) => {
    var preSister = this.state.sister;
    console.log("id: " + e.target.id);
    if (e.target.id == 0) preSister.phoneNumber = e.target.value;
    if (e.target.id == 1) preSister.password = e.target.value;
    if (e.target.id == 2) preSister.firstname = e.target.value;
    if (e.target.id == 3) preSister.lastname = e.target.value;
    if (e.target.id == 4) preSister.address = e.target.value;
    if (e.target.id == 5) preSister.district = e.target.value;
    if (e.target.id == 6) preSister.city = e.target.value;
    if (e.target.id == 7) preSister.sex = e.target.value;
    if (e.target.id == 8) preSister.age = e.target.value;
    if (e.target.id == 9) preSister.email = e.target.value;
    // if (e.target.id == 9) preSister.avatar = e.target.value;
    if (e.target.id == 10) preSister.note = e.target.value;

    this.setState({ sister: preSister });
  };

  _handleFileChangeUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ preview: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    this.setState({ avatar: e.target.files[0] });
    var preSister = this.state.sister;
    preSister.avatar = e.target.files[0].name;
    this.setState({ sister: preSister });
    console.log(e.target.files[0]);
  };

  _handleRegister = (e) => {
    console.log(this.state.sister);
    e.preventDefault();
    const formData = new FormData();
    formData.append("myAvatar", this.state.avatar);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    //  Upload image
    axios
      .post("http://localhost:1998/api/sisters/upload", formData, config)
      .then((response) => {
        console.log("The file is successfully uploaded");
      })
      .catch((error) => {
        console.log("Error post response !");
      });

    // Register
    axios
      .post("http://localhost:1998/api/sisters", this.state.sister)
      .then((res) => {
        console.log(res);
        this.props.history.push("/mainpage");
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { thisYear, selectedYear } = this.state;
    const yearOptions = [];
    for (let i = minOffset; i <= maxOffset; i++) {
      const year = thisYear - i;
      yearOptions.push(<option>{year}</option>);
    }

    return (
      <div style={background1}>
        <Example />
        <div className="register-container">
          <div className="register">
            <CardTitle> BABYSISTER REGISTER </CardTitle>
            <FormGroup className="form-inline">
              <Label> Phone Number: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="number"
                id="0"
                required
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label> Password: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="password"
                id="1"
                required
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label> Firstname: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="text"
                id="2"
                required
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label> Lastname: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="text"
                id="3"
                required
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label>Sex: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="select"
                id="7"
                required
              >
                <option />
                <option>Male</option>
                <option>Female</option>
                <option>LGBT</option>
              </Input>
            </FormGroup>
            <FormGroup className="form-inline">
              <Label>Year of Birth: </Label>
              <div onChange={this._handleChange} type="number" id="7" required>
                <select
                  style={{ width: "300px" }}
                  value={this.selectedYear}
                  onChange={this._handleYearChange}
                >
                  <option />
                  {yearOptions}
                </select>
              </div>
            </FormGroup>
            <FormGroup className="form-inline">
              <Label>City: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="text"
                id="6"
                required
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label>District: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="text"
                id="5"
                required
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label> Address: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="text"
                id="4"
                required
              />
            </FormGroup>

            <FormGroup className="form-inline">
              <Label>Email: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="text"
                id="9"
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label>Experience: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="select"
                id="10"
                required
              >
                <option />
                <option>&lt; 6 months</option>
                <option>6 months - 1 year</option>
                <option>1 - 3 years</option>
                <option>&gt; 3 years</option>
              </Input>
            </FormGroup>
            <FormGroup className="form-inline">
              <Label>Billingrate: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="select"
                id="11"
              >
                <option />
                <option>5 - 7 $/hour</option>
                <option>7 - 9 $/hour</option>
                <option>9 - 11 $/hour</option>
                <option>11 - 13 $/hour</option>
              </Input>
            </FormGroup>
            <FormGroup className="form-inline">
              <Label>Availability: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="select"
                id="11"
              >
                <option />
                <option>Right now</option>
                <option>Within a week</option>
                <option>Within a month</option>
                <option>More</option>
              </Input>
            </FormGroup>
            <FormGroup className="form-inline">
              <Label>Overview: </Label>
              <Input
                placeholder="Introduce about yourself..."
                style={{ width: "300px", height: "150px" }}
                onChange={this._handleChange}
                type="textarea"
                id="13"
                maxLenght="200"
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <img
                id="target"
                src={this.state.preview}
                alt="Avatar"
                style={{
                  width: "70px",
                  height: "70px",
                  marginRight: "20px",
                  marginLeft: "50px"
                }}
              />
              <Input
                style={{ width: "300px" }}
                onChange={this._handleFileChangeUpload}
                type="file"
                className="filetype"
                id="group_image"
              />
            </FormGroup>

            <Button
              style={button}
              type="submit"
              onClick={this._handleRegister}
              className=""
            >
              {" "}
              Register{" "}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterSister;
