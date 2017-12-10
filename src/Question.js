import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand, Container, Row, Col, Button } from 'reactstrap';
import Answer from './Answer';

class Question extends Component {

  render() {

    let answers = [];
    for (let i = 0; i < this.props.question.answers.length; i++) {
      answers.push(
        <Answer
          answer={this.props.question.answers[i]}
          selectAnswer={this.props.selectAnswer}
        />
      )
    }

    return (
      <Container className="text-center p-5">
        <Row className="mt-5 pt-5">
          <Col>
            <h3>
              {this.props.question.text}
            </h3>
          </Col>
        </Row>
        <Row className="mt-5 pt-5 pb-5">
          {answers}
        </Row>
      </Container>
    );
  }
}

export default Question;
