import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import { bindActionCreators } from 'redux';
import { logout, getUserByToken } from '../actions/user-actions';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import * as routes from '../constants/routes';

class App extends Component {

  componentDidMount(){
    const token = localStorage.getItem('token');
    token && this.props.getUserByToken(token);
  }
  
  render() {

    return ( this.props.isLoading || this.props.isAuthorizing ) ? <div>wait...</div> :
     (
    <Router>
      <div>
        <Switch>
          <Route exact path={ routes.login } render={ () => (this.props.isAuthorized) ? <Redirect to={ routes.home } /> : <LoginForm /> } />
          <Route exact path={ routes.home } render={ () => (this.props.isAuthorized) ? <HomePage /> : <Redirect to={ routes.login } /> } />
          <Route exact path={ routes.main } render={ () => (this.props.isAuthorized) ? <Redirect to={ routes.home } /> : <Redirect to={ routes.login } /> } /> 
        </Switch>
      </div>
    </Router>
    )   
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.login.loading,
    isAuthorized: state.login.isAuthorized,
    isAuthorizing: state.login.isAuthorizing,
    user: state.login.user
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logout: logout,
    getUserByToken: getUserByToken
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
