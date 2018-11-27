import React, { Component } from "react";
import {
  FormGroup,
  Form,
  Label,
  CardTitle,
  Input,
  Nav,
  Button,
  Container
} from "reactstrap";
import axios from "axios";

var text_center = {
  textAlign: "center"
};

var form_style = {
  width: "700px",
  margin: "auto",
  background: "#eeeeee",
  padding: "20px"
};

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
    this.setState({ avatar: e.target.files[0] });
    var preParent = this.state.parent;
    preParent.avatar = e.target.files[0].name;
    this.setState({ parent: preParent });
    console.log(e.target.files[0]);
  };

  render() {
    return (
      <div className="container">
        <Container>
          <CardTitle style={text_center}>PARENT REGISTER </CardTitle>
          <Form style={form_style}>
            <FormGroup>
              <Label>Phone Number: </Label>
              <Input
                onChange={this._handleChange}
                type="number"
                id="0"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label> Password: </Label>
              <Input
                onChange={this._handleChange}
                type="password"
                id="1"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label> Fullname: </Label>
              <Input
                onChange={this._handleChange}
                type="text"
                id="2"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label> City: </Label>
              <Input
                onChange={this._handleChange}
                type="text"
                id="3"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>District: </Label>
              <Input
                onChange={this._handleChange}
                type="text"
                id="4"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label> Address: </Label>
              <Input
                onChange={this._handleChange}
                type="text"
                id="5"
                required
              />
            </FormGroup>
            <FormGroup>
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
            </FormGroup>
            <FormGroup>
              <Label> Year of birth: </Label>
              <Input onChange={this._handleChange} type="number" id="7" />
            </FormGroup>
            <FormGroup>
              <Label>Email: </Label>
              <Input onChange={this._handleChange} type="text" id="8" />
            </FormGroup>
            <h2>Baby's info:</h2>
            <FormGroup>
              <Label>Baby's age: </Label>
              <Input onChange={this._handleChange} type="number" id="10" />
            </FormGroup>
            <FormGroup>
              <Label>Baby's gender: </Label>
              <Input onChange={this._handleChange} type="select" id="11">
                <option />
                <option>Male</option>
                <option>Female</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Note: </Label>
              <Input
                onChange={this._handleChange}
                type="textarea"
                maxLength="300"
                id="12"
              />
            </FormGroup>
            <FormGroup>
              <input type="file" onChange={this._handleFileChangeUpload} />
            </FormGroup>
            <Button onClick={this._handleRegister} type="submit" className="">
              {" "}
              Register{" "}
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default RegisterParent;
