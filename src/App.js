import React, { Component } from 'react';
import './App.css';
import Loginform from './containers/Loginform';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loginform />
        Hello, {this.props.username}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(App);
