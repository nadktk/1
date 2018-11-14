import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, logout, register } from '../actions/user-actions';
import LoginDialog from '../components/login-dialog';

class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        message: 'Enter your login and password:'
      }
    }

    handleLogin = (login, password) => {
        this.props.login({
          login: login,
          password: password
        });
    };

    handleReg = (login, password) => {
        if (login.length<4||login.length>15||password.length<4||password.length>15) {
          this.setState({
            message: 'Username and password should be 4-15 characters long.\n Try again'
          })
        } else {
          this.props.register({
            login: login,
            password: password
          });
          this.setState({
            message: 'Registration completed. Please login'
        })
      }
    }

    render() {
      return (
        <div>
          <LoginDialog 
            headerMessage={this.state.message} 
            handleLogin={this.handleLogin}
            handleReg={this.handleReg}          
          />  
        </div>
    );
  }

}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login: login,
    logout: logout,
    register: register
  }, dispatch)
}

export default connect(null, matchDispatchToProps)(LoginForm);
