import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoginForm from './_containers/LoginForm';

class App extends Component {    
  render() {
    const { username, authorized } = this.props;
    return authorized
      ? <h1>Hello, {username}</h1>
      : <LoginForm />
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    authorized: state.authorized
  }
}

export default connect(mapStateToProps)(App);
