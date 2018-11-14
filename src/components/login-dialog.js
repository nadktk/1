import { Dialog, DialogTitle, DialogActions, DialogContent, Button, TextField } from '@material-ui/core';
import React from 'react';
//import { checkPropTypes } from 'prop-types';

 const LoginDialog = (props) => {
      return(
      <div>
        <Dialog
          open={true}
        >
          <DialogTitle id="form-dialog-title">{ props.headerMessage }</DialogTitle>
          <DialogContent>
            <TextField
              id="name"
              name="login"
              label="Login"
              type="text"
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={()=>props.handleLogin('login', 'password')} color="primary">
              Login
            </Button>
            <Button onClick={()=>props.handleReg('log', 'pass')}  color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </div>);
}

export default LoginDialog;