import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, logout, register } from '../actions/user-actions';
import LoginDialog from '../components/login-dialog';

class LoginForm extends Component {
  
    handleLogin = (login, password) => {
        this.props.login({
          login: login,
          password: password
        });
    };

    handleReg = (login, password) => {
        this.props.register({
          login: login,
          password: password
        });
        this.setState({
          message: this.props.regStatus
        })
      }    

    render() {
      return (
        <div>
          <LoginDialog 
            headerMessage={ this.props.regError || this.props.loginError || 'Enter your login and password'} 
            handleLogin={this.handleLogin}
            handleReg={this.handleReg}          
          />  
        </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    regError: state.registration.error,
    loginError: state.login.error
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login: login,
    logout: logout,
    register: register
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
