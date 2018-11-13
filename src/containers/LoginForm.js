import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import login from '../actions/authorization';
import registration from '../actions/registration';

// import material ui elements
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


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
        this.props.authorization({
          login: this.state.login,
          password: this.state.password
        });
        this.setState({
          login: '',
          password: ''
        })
    };

    handleReg = () => {      
        this.props.registration({
          login: this.state.login,
          password: this.state.password
        });
        this.setState({
          login: '',
          password: '',
          message: 'Registration completed. Please login'
        })
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
              value={this.state.login}
              fullWidth
              onChange={this.handleChange} 
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={this.state.password}
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

const mapStateToProps = (state) => {
      return {
        authorized: state.authorized
      };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    authorization: login,
    registration: registration
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
