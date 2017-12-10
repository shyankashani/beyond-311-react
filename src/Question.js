import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand, Container, Row, Col, Button } from 'reactstrap';

class Question extends Component {

  render() {
    return (
      <Container className="text-center p-5">
        <Row>
          <Col>
            <h1 style={{"color": "#F57C00"}}>
              Beyond 311
            </h1>
          </Col>
        </Row>
        <Row className="mt-2 pt-2">
          <Col>
            <h3>
              Can we use your location?
              <br></br>
              <br></br>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 pt-5">
          <Col>
            <div>
              <br></br>
            </div>
          </Col>
        </Row>
        <Row className="pt-5 pb-5">
          <a
            className="btn-block"
            href={`https://sossf.typeform.com/to/KQHeTt?lat=${this.props.fields.lat}&lng=${this.props.fields.lng}&sid=${this.props.fields.sid}`}
          >
            <Button
              outline
              style={{"border": "1px solid #F57C00", "color" : "#F57C00", "background-color" : "rgba(245, 124, 0, 0.1)"}}
              className="pl-4 pr-4 pt-2 pb-2 mb-3 btn-block"
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
