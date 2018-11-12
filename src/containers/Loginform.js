import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions/login';
import {username} from '../actions/username';

class Loginform extends Component {

    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };
    }

    handleClickOpen = () => {
      this.setState({ open: true });
    };
    
    handlePost = () => {
      this.props.login(true);
      let data = {
          login: this.state.username,
          password: this.state.password
      };
      const url = 'https://incode-shop.herokuapp.com/';
      console.log(url);
      console.log(data);
    };

    handleChange = (e) => {
      const {name, value} = e.target; 
      this.setState({ [name]: value });
    };

    render() {
      return (
        <div>
          <Dialog
            open={!this.props.authorized}
            onClose={this.handlePost}
          >
          <DialogTitle id="form-dialog-title">Hello user</DialogTitle>
          <DialogContent>
            <TextField
              id="name"
              name="username"
              label="Login"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={this.handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handlePost} color="primary">
              Login
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
    login: login,
    username: username
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Loginform);
