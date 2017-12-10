import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand, Container, Row, Col, Button } from 'reactstrap';

class Question extends Component {

  render() {
    return (
      <Container className="text-center p-5">
        <Row className="mt-5 pt-5">
          <Col>
            <h3>
              Can we use your location?
            </h3>
          </Col>
        </Row>
        <Row className="mt-5 pt-5 pb-5">
          <a
            className="btn-block"
            href={`https://sossf.typeform.com/to/KQHeTt?lat=${this.props.fields.lat}&lng=${this.props.fields.lng}&sid=${this.props.fields.sid}`}
          >
            <Button
              size="lg"
              color="primary"
              className="pl-4 pr-4 pt-2 pb-2 mb-3 badge-pill btn-block"
            >
              Use my location
            </Button>
          </a>
        </Row>
      </Container>
    );
  }
}

export default Question;
