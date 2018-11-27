import React, { Component } from "react";
import {
  FormGroup,
  Form,
  Label,
  CardTitle,
  Input,
  Nav,
  Button,
  Col,
  Row,
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

class RegisterSister extends Component {
  componentDidMount() {}

  state = {
    sister: {
      phoneNumber: "",
      password: "",
      fullname: "",
      city: "",
      district: "",
      address: "",
      sex: "",
      age: "",
      email: "",
      avatar: "",
      note: ""
    },
    avatar: null
  };

  _handleChange = (e) => {
    var preSister = this.state.sister;
    console.log("id: " + e.target.id);
    if (e.target.id == 0) preSister.phoneNumber = e.target.value;
    if (e.target.id == 1) preSister.password = e.target.value;
    if (e.target.id == 2) preSister.fullname = e.target.value;
    if (e.target.id == 3) preSister.address = e.target.value;
    if (e.target.id == 4) preSister.district = e.target.value;
    if (e.target.id == 5) preSister.city = e.target.value;
    if (e.target.id == 6) preSister.sex = e.target.value;
    if (e.target.id == 7) preSister.age = e.target.value;
    if (e.target.id == 8) preSister.email = e.target.value;
    // if (e.target.id == 9) preSister.avatar = e.target.value;
    if (e.target.id == 10) preSister.note = e.target.value;

    this.setState({ sister: preSister });
  };

  _handleFileChangeUpload = (e) => {
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
    return (
      <div className="container">
        <Container>
          <CardTitle style={text_center}> BABYSISTER REGISTER </CardTitle>

          <Form style={form_style}>
            <FormGroup>
              <Label>Fullname: </Label>
              <Input
                onChange={this._handleChange}
                type="text"
                id="2"
                required
              />
            </FormGroup>

            <Row form>
              <Col>
                <FormGroup>
                  <Label>Phone Number: </Label>
                  <Input
                    onChange={this._handleChange}
                    type="number"
                    id="0"
                    required
                  />
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Label> Password: </Label>
                  <Input
                    onChange={this._handleChange}
                    type="password"
                    id="1"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col>
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
              </Col>
              <Col>
                <FormGroup>
                  <Label>Age: </Label>
                  <Input
                    onChange={this._handleChange}
                    type="number"
                    id="7"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label>City: </Label>
              <Input
                onChange={this._handleChange}
                type="text"
                id="5"
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
                id="3"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Email: </Label>
              <Input onChange={this._handleChange} type="text" id="8" />
            </FormGroup>
            <FormGroup>
              <Label>Note: </Label>
              <Input
                onChange={this._handleChange}
                type="textarea"
                id="10"
                maxLenght="200"
              />
            </FormGroup>
            <FormGroup>
              <Label>Avatar: </Label>
              <Input onChange={this._handleFileChangeUpload} type="file" />
            </FormGroup>

            <Button type="submit" onClick={this._handleRegister} className="">
              {" "}
              Register{" "}
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default RegisterSister;
