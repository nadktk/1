import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//import axios from 'axios';

class Loginform extends Component {

    state = {
        username: '',
        password: '',
        open: false,
      };

      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handlePost = () => {
        this.setState({ open: false });
        let data = {
            login: this.state.username,
            password: this.state.password
        };
        const url = 'https://incode-shop.herokuapp.com/';
        console.log(url);
        console.log(data);
      };



      render() {
          return (
              <div>
                  <Button onClick={this.handleClickOpen} variant="contained">Please login</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handlePost}
        >
          <DialogTitle id="form-dialog-title">Hello user</DialogTitle>
          <DialogContent>
            <TextField
              id="name"
              label="Login"
              type="text"
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              type="password"
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

export default Loginform;
