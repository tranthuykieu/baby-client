import React, { Component } from "react";
import {
  FormGroup,
  Form,
  Label,
  CardTitle,
  Input,
  Nav,
  Button
} from "reactstrap";
import axios from "axios";

class RegisterParent extends Component {
  componentDidMount() {}
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     avatar: null
  //   };
  //   this._handleFileUpload = this._handleFileUpload.bind(this);
  //   this._handleFileChangeUpload = this._handleFileChangeUpload.bind(this);
  // }

  state = {
    parent: {
      phoneNumber: "",
      password: "",
      fullname: "",
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
    avatar: null
  };

  _handleChange = (e) => {
    var preParent = this.state.parent;
    console.log("id: " + e.target.id);
    if (e.target.id == 0) preParent.phoneNumber = e.target.value;
    if (e.target.id == 1) preParent.password = e.target.value;
    if (e.target.id == 2) preParent.fullname = e.target.value;
    if (e.target.id == 3) preParent.city = e.target.value;
    if (e.target.id == 4) preParent.district = e.target.value;
    if (e.target.id == 5) preParent.address = e.target.value;
    if (e.target.id == 6) preParent.sex = e.target.value;
    if (e.target.id == 7) preParent.yearOfBirth = e.target.value;
    if (e.target.id == 8) preParent.email = e.target.value;
    // if (e.target.id == 9) preParent.avatar = e.target.files[0].name;
    if (e.target.id == 10) preParent.babyAge = e.target.value;
    if (e.target.id == 11) preParent.babyGender = e.target.value;
    if (e.target.id == 12) preParent.note = e.target.value;
    // console.log("avatar: " + preParent.avatar);

    this.setState({ parent: preParent });
  };

  _handleRegister = (e) => {
    console.log(this.state.parent);

    axios
      .post("http://localhost:1998/api/parents", this.state.parent)
      .then((res) => {
        console.log(res);
        this.props.history.push("/mainpage");
      })
      .catch((err) => err);
  };

  _handleFileUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myAvatar", this.state.avatar);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post("http://localhost:1998/api/parents/upload", formData, config)
      .then((response) => {
        console.log("The file is successfully uploaded");
      })
      .catch((error) => {
        console.log("Error post response !");
      });
  };

  _handleFileChangeUpload = (e) => {
    this.setState({ avatar: e.target.files[0] });
    var preParent = this.state.parent;
    preParent.avatar = e.target.files[0].name;
    this.setState({ parent: preParent });
    console.log(e.target.files[0]);
  };

  render() {
    return (
      <div className="container">
        <FormGroup>
          <CardTitle>PARENT REGISTER </CardTitle>
          <Form>
            <Nav>
              <Label>Phone Number: </Label>
              <Input
                onChange={this._handleChange}
                type="text"
                id="0"
                required
              />
            </Nav>
            <Nav>
              <Label> Password: </Label>
              <Input
                onChange={this._handleChange}
                type="password"
                id="1"
                required
              />
            </Nav>
            <Nav>
              <Label> Fullname: </Label>
              <Input
                onChange={this._handleChange}
                type="text"
                id="2"
                required
              />
            </Nav>
            <Nav>
              <Label> City: </Label>
              <Input
                onChange={this._handleChange}
                type="text"
                id="3"
                required
              />
            </Nav>
            <Nav>
              <Label>District: </Label>
              <Input
                onChange={this._handleChange}
                type="text"
                id="4"
                required
              />
            </Nav>
            <Nav>
              <Label> Address: </Label>
              <Input
                onChange={this._handleChange}
                type="text"
                id="5"
                required
              />
            </Nav>
            <Nav>
              <Label>Sex: </Label>
              <Input
                onChange={this._handleChange}
                type="select"
                id="6"
                required
              >
                <option />
                <option>Male</option>
                <option>Female</option>
                <option>LGBT</option>
              </Input>
            </Nav>
            <Nav>
              <Label> Year of birth: </Label>
              <Input onChange={this._handleChange} type="number" id="7" />
            </Nav>
            <Nav>
              <Label>Email: </Label>
              <Input onChange={this._handleChange} type="text" id="8" />
            </Nav>
            <h2>Baby's info:</h2>
            <Nav>
              <Label>Baby's age: </Label>
              <Input onChange={this._handleChange} type="number" id="10" />
            </Nav>
            <Nav>
              <Label>Baby's gender: </Label>
              <Input onChange={this._handleChange} type="select" id="11">
                <option />
                <option>Male</option>
                <option>Female</option>
              </Input>
            </Nav>
            <Nav>
              <Label>Note: </Label>
              <Input
                onChange={this._handleChange}
                type="textarea"
                maxLength="300"
                id="12"
              />
            </Nav>
          </Form>

          <Button onClick={this._handleRegister} type="submit" className="">
            {" "}
            Register{" "}
          </Button>
        </FormGroup>
        <form onSubmit={this._handleFileUpload}>
          <input type="file" onChange={this._handleFileChangeUpload} />
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default RegisterParent;
