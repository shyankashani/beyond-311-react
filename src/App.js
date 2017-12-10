import React, { Component } from 'react';
import { Navbar, NavbarBrand, Container, Row, Col, Button } from 'reactstrap';
import Question from './Question';
import Home from './Home';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        lat: null,
        lng: null,
        sid: null
      },
      isEmergency: null
    }
  }

  setFields(position) {
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.setFields.bind(this));
  }

  componentDidUpdate() {
    console.log('state', this.state)
  }

  setEmergency() {
    this.setState({
      isEmergency: false
    })
  }


  render() {

    let display = [];
    if (this.state.isEmergency === null) {
      display.push(
        <Home setEmergency={this.setEmergency.bind(this)} key="Home" />
      )
    }

    if (this.state.isEmergency === false) {
      display.push(
        <Question setFields={this.setFields.bind(this)} key="Question" />
      )
    }

    return (
      <div className="text-dark">
        <Navbar color="light">
          <NavbarBrand className="text-primary">
            Beyond 311
          </NavbarBrand>
        </Navbar>
        {display}
      </div>
    );
  }
}

export default App;
