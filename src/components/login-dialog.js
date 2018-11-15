import { Dialog, DialogTitle, DialogActions, DialogContent, Button, TextField } from '@material-ui/core';
import React from 'react';

 class LoginDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInput: '',
      passwordInput: '',
      loginErrorMessage:'',
      passwordErrorMessage:'',
      loginError: false,
      passwordError: false
    };
    this.handleChange = this.handleChange.bind(this)
  }

  emailValidator = (value) => /^(\S+)@(\S+){2,}\.([\w\d]+){2,}$/i.test(value);
  passwordValidator = (value) => value.length > 5 && value.length < 16;
  formIsValid = () => {
    let res = true
    if (!this.emailValidator(this.state.loginInput)) {
      this.setState({
        loginError: true,
        loginErrorMessage: 'Login should be your email address'
      });
      res = false;
    }
    if (!this.passwordValidator(this.state.passwordInput)) {
      this.setState({
        passwordError: true,
        passwordErrorMessage: 'Password shouldn\'t be shorter than 6 characters or longer than 15'
      });
      res = false;
    }
    return res
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value,
      loginErrorMessage:'',
      passwordErrorMessage:'',
      loginError: false,
      passwordError: false
    })
  } 
  
  render() {
    return(
      <div>
        <Dialog open >
          <DialogTitle id="form-dialog-title">{ this.props.headerMessage }</DialogTitle>
          <DialogContent>
            <TextField
              required
              id="login"
              name="loginInput"
              label="Login"
              type="text"
              value={ this.state.loginInput }
              onChange={ this.handleChange }
              error={ this.state.loginError }
              helperText={ this.state.loginErrorMessage }
              fullWidth
            /><br /><br />
            <TextField
              required
              id="password"
              name="passwordInput"
              label="Password"
              type="password"
              value={ this.state.passwordInput }
              onChange={ this.handleChange }
              error={ this.state.passwordError }
              helperText={ this.state.passwordErrorMessage }
              fullWidth
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={()=> this.formIsValid() ? this.props.handleLogin(this.state.loginInput, this.state.passwordInput) : null } color="primary">
              Login
            </Button>
            <Button onClick={()=> this.formIsValid() ? this.props.handleReg(this.state.loginInput, this.state.passwordInput) : null }  color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </div>);
  }
}

export default LoginDialog;