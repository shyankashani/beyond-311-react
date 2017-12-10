import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand, Container, Row, Col, Button, Footer } from 'reactstrap';

class Home extends Component {

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
            <h4>
              Help homeless neighbors find a place to belong.
            </h4>
          </Col>
        </Row>
        <Row className="mt-1" style={{"color": "#757575"}}>
          <Col>
            <div>
              Inform outreach workers about people in need.
            </div>
          </Col>
        </Row>
        <Row className="mt-5 pt-5">
          <Button
            outline
            style={{"border": "1px solid #F57C00", "color" : "#F57C00", "background-color" : "rgba(245, 124, 0, 0.1)"}}
            className="pl-4 pr-4 pt-2 pb-2 mb-3 btn-block"
            onClick={this.props.getCurrentPosition}
          >
            Report an encampment
          </Button>
        </Row>
        <Row className="mt-1">
          <Col>
            <div style={{"font-weight" : "100", "color" : "#F57C00", "font-size" : "14px"}}>
              If this is an emergency, call 911.
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
