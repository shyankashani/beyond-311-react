import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand, Container, Row, Col, Button } from 'reactstrap';

class App extends Component {

  render() {
    return (
      <Button
        size="lg"
        color="primary"
        className="pl-4 pr-4 pt-2 pb-2 mb-3 badge-pill btn-block"
        onClick={this.props.selectAnswer}
      >
        {this.props.answer}
      </Button>
    );
  }
}

export default App;
