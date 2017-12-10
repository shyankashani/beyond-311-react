import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand, Container, Row, Col, Button } from 'reactstrap';
import Question from './Question';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 0,
          text: 'Can we use your location?',
          answers: ['Yes', 'No'],
          answer: null
        },
        {
          id: 1,
          text: 'What time is it?',
          answers: ['Hello', 'Goodbye'],
          answer: null
        }
      ],
      index: 0
    }
  }

  selectAnswer(answer) {
    // make API call

    // update relevant question's answer property in state

    this.setState(state => {
      return {
        index: state.index + 1
      }
    })
  }

  render() {
    return (
      <div className="text-dark">
        <Navbar color="light">
          <NavbarBrand className="text-primary">
            Beyond 311
          </NavbarBrand>
        </Navbar>
        <Question
          question={this.state.questions[this.state.index]}
          selectAnswer={this.selectAnswer.bind(this)}
        />
      </div>
    );
  }
}

export default App;
