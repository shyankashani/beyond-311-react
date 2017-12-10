import React, { Component } from 'react';
import shortid from 'shortid';
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

  updateState(position) {
    this.setState({
      fields: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        sid: shortid.generate()
      },
      isEmergency: false
    })
  }

  componentDidUpdate() {
    console.log('state', this.state)
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(this.updateState.bind(this));
  }

  render() {
    let display = [];
    if (this.state.isEmergency === null) {
      display.push(
        <Home getCurrentPosition={this.getCurrentPosition.bind(this)} key="Home" />
      )
    }

    if (this.state.isEmergency === false) {
      display.push(
        <Question fields={this.state.fields} key="Question" />
      )
    }

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default App;
