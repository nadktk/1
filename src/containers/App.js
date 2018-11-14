import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import { bindActionCreators } from 'redux';
import {logout, getUserByToken} from '../actions/user-actions';

class App extends Component {

  componentWillMount() {
    if (localStorage.getItem("user")!=null) {
      let token = localStorage.getItem("user");
      this.props.getUserByToken(token)
    } 
  }
  
  render() {
    const { isAuthorized } = this.props;    
    return isAuthorized
      ? <HomePage />
      : <LoginForm />
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user,
    isAuthorized: state.login.isAuthorized
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logout: logout,
    getUserByToken: getUserByToken
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
