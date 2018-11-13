import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authorization } from '../_actions/authorization';
import { username } from '../_actions/username';

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
        password: ''
      }
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    } 

    handleAuth = () => {
      let data = {
          login: this.state.login,
          password: this.state.password
      };
      this.props.authorization(data);
      this.props.username(data.login);
    };

    render() {
      return (
        <div>
          <Dialog
            open={true}
          >
          <DialogTitle id="form-dialog-title">Hello user</DialogTitle>
          <DialogContent>
            <TextField
              id="name"
              name="login"
              label="Login"
              type="text"
              fullWidth
              onChange={this.handleChange} 
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
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
    authorization: authorization,
    username: username
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
