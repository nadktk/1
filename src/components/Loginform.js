import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Loginform extends Component {
    state = {
        open: false,
      };

      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      render() {
          return (
              <div>
                  <Button onClick={this.handleClickOpen} variant="contained">Please login</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
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
            <Button onClick={this.handleClose} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    );
  }
}

export default Loginform;
