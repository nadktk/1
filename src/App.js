import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoginForm from './containers/LoginForm';
import { bindActionCreators } from 'redux';
import login from './actions/authorization';

//material ui
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {

  componentWillMount(){
    console.log('localStorage', localStorage);
  }

  handleLogout() {
    this.props.authorization({});
  }
  
  render() {
    const { user, isAuthorized } = this.props;
    return isAuthorized
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
    user: state.login.user,
    isAuthorized: state.login.isAuthorized
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    authorization: login
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
