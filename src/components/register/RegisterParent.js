import React, { Component } from "react";
import { FormGroup, Input, CardTitle, Button } from "reactstrap";
import axios from "axios";

import styled from "styled-components";
import Example from "../Nav";
import begin from "../../img/begin.jpeg";

const minOffset = 0;
const maxOffset = 16;

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

class RegisterParent extends Component {
  componentDidMount() {}

  state = {
    parent: {
      phoneNumber: "",
      password: "",
      firstname: "",
      lastname: "",
      city: "",
      district: "",
      address: "",
      sex: "",
      yearOfBirth: "",
      email: "",
      avatar: "",
      babyAge: "",
      babyGender: "",
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
    var preParent = this.state.parent;
    console.log("id: " + e.target.id);
    if (e.target.id == 0) preParent.phoneNumber = e.target.value;
    if (e.target.id == 1) preParent.password = e.target.value;
    if (e.target.id == 2) preParent.firstname = e.target.value;
    if (e.target.id == 3) preParent.lastname = e.target.value;
    if (e.target.id == 4) preParent.city = e.target.value;
    if (e.target.id == 5) preParent.district = e.target.value;
    if (e.target.id == 6) preParent.address = e.target.value;
    if (e.target.id == 7) preParent.sex = e.target.value;
    if (e.target.id == 8) preParent.yearOfBirth = e.target.value;
    if (e.target.id == 9) preParent.email = e.target.value;
    // if (e.target.id == 9) preParent.avatar = e.target.files[0].name;
    if (e.target.id == 10) preParent.babyAge = e.target.value;
    if (e.target.id == 11) preParent.babyGender = e.target.value;
    if (e.target.id == 12) preParent.note = e.target.value;
    // console.log("avatar: " + preParent.avatar);

    this.setState({ parent: preParent });
  };

  _handleRegister = (e) => {
    console.log(this.state.parent);
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
      .post("http://localhost:1998/api/parents/upload", formData, config)
      .then((response) => {
        console.log("The file is successfully uploaded");
      })
      .catch((error) => {
        console.log("Error post response !");
      });

    // Register
    axios
      .post("http://localhost:1998/api/parents", this.state.parent)
      .then((res) => {
        console.log(res);
        this.props.history.push("/mainpage");
      })
      .catch((err) => err);
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
    var preParent = this.state.parent;
    preParent.avatar = e.target.files[0].name;
    this.setState({ parent: preParent });
    console.log(e.target.files[0]);
  };

  render() {
    const { thisYear, selectedYear } = this.state;
    const yearParentOptions = [];
    const yearBabyOptions = [];
    for (let i = 18; i <= 60; i++) {
      const year = thisYear - i;
      yearParentOptions.push(<option value={year}>{year}</option>);
    }
    for (let i = minOffset; i <= maxOffset; i++) {
      const year = thisYear - i;
      yearBabyOptions.push(<option value={year}>{year}</option>);
    }

    
    
    return (
      <div style={background1}>
        <Example />
        <div className="register-container">
          <div className="register">
            <CardTitle>PARENT REGISTER </CardTitle>

            <FormGroup className="form-inline">
              <Label>Phone Number: </Label>
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
              <Label> City: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="text"
                id="4"
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
                id="6"
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
              <Label> Year of birth: </Label>
              <div onChange={this._handleChange} type="number" id="8" required>
                <select
                  style={{ width: "300px" }}
                  value={this.selectedYear}
                  onChange={this._handleYearChange}
                >
                  <option />
                  {yearParentOptions}
                </select>
              </div>{" "}
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
            <CardTitle>Baby's info:</CardTitle>
            <FormGroup className="form-inline">
              <Label>Baby's YoB: </Label>
              <div onChange={this._handleChange} type="number" id="10" required>
                <select
                  style={{ width: "300px" }}
                  value={this.selectedYear}
                  onChange={this._handleYearChange}
                >
                  <option />
                  {yearBabyOptions}
                </select>
              </div>
            </FormGroup>
            <FormGroup className="form-inline">
              <Label>Baby's gender: </Label>
              <Input
                style={{ width: "300px" }}
                onChange={this._handleChange}
                type="select"
                id="11"
              >
                <option />
                <option>Male</option>
                <option>Female</option>
              </Input>
            </FormGroup>
            <FormGroup className="form-inline">
              <Label>Note: </Label>
              <Input
                style={{ width: "300px", height: "150px" }}
                onChange={this._handleChange}
                type="textarea"
                id="12"
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
              color='primary'
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

export default RegisterParent;
