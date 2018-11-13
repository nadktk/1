import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoginForm from './_containers/LoginForm';
import { bindActionCreators } from 'redux';
import { authorization } from './_actions/authorization';
import { username } from './_actions/username';

//material ui
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {

  handleLogout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.props.authorization(false);
  }
  
  render() {
    const { user, authorized } = this.props;
    return authorized
      ? (<div>
         <AppBar color="default">
         <Toolbar>
         <Button 
            onClick={this.handleLogout.bind(this)}
            color="inherit"
            variant="contained"
            style={{marginRight: "20px"}}
         >
         Logout
         </Button>

        <Typography variant="h6" color="inherit">
            Hello, {user}
         </Typography>

         </Toolbar>
         </AppBar>
        </div>)
      : <LoginForm />
  }
}

const mapStateToProps = state => {
  return {
    user: state.username,
    authorized: state.authorized
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    authorization: authorization,
    username: username
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
