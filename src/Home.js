import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand, Container, Row, Col, Button } from 'reactstrap';

class Home extends Component {

  render() {
    return (
      <Container className="text-center p-5">
        <Row className="mt-5 pt-5">
          <Col>
            <h3>
              If this is an emergency, call 9-1-1.
            </h3>
          </Col>
        </Row>
        <Row className="mt-5 pt-5 pb-5">
          <Button
            size="lg"
            color="primary"
            className="pl-4 pr-4 pt-2 pb-2 mb-3 badge-pill btn-block"
            onClick={this.props.getCurrentPosition}
          >
            This is not an emergency
          </Button>
        </Row>
      </Container>
    );
  }
}

export default Home;
