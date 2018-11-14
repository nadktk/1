import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, logout, register } from '../actions/user-actions';

import { Dialog, DialogTitle, DialogActions, DialogContent, Button, TextField } from '@material-ui/core';

class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        login: '',
        password: '',
        message: 'Enter your login and password:'
      }
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    } 

    handleAuth = () => {
        this.props.login({
          login: this.state.login,
          password: this.state.password
        });
        this.setState({
          login: '',
          password: ''
        })
    };

    handleReg = () => {
        let { login, password } = this.state;
        if (login.length<4||login.length>15||password.length<4||password.length>15) {
          this.setState({
            login: '',
            password: '',
            message: 'Username and password should be 4-15 characters long.\n Try again'
          })
        } else {
          this.props.register({
            login: login,
            password: password
          });
          this.setState({
            login: '',
            password: '',
            message: 'Registration completed. Please login'
        })
      }
    }

    render() {
      return (
        <div>
          <Dialog
            open={true}
          >
          <DialogTitle id="form-dialog-title">{this.state.message}</DialogTitle>
          <DialogContent>
            <TextField
              id="name"
              name="login"
              label="Login"
              type="text"
              value={this.state.loginValue}
              fullWidth
              onChange={this.handleChange} 
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={this.state.passwordValue}
              fullWidth
              onChange={this.handleChange} 
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleAuth} color="primary">
              Login
            </Button>
            <Button onClick={this.handleReg} color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//       return {
//         authorized: state.authorized
//       };
// }

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login: login,
    logout: logout,
    register: register
  }, dispatch)
}

export default connect(null, matchDispatchToProps)(LoginForm);
