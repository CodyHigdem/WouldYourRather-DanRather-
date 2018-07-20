import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login';
import Question from './Question';
import Dashboard from './Dashboard';
import '../App.css';

import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">

        <Dashboard />
      </div>
    );
  }
}

export default connect()(App)
