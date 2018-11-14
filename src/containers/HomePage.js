import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/user-actions';


//material ui
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class HomePage extends Component {
  
  render() {    
    return (
        <div>
            <AppBar color="default">
            <Toolbar>
                <Button 
                    onClick={()=>{this.props.logout()}}
                    color="inherit"
                    variant="contained"
                    style={{marginRight: "20px"}}
                >
                    Logout
                </Button>
                <Typography variant="h6" color="inherit">
                    Hello, {this.props.user}
                </Typography>
            </Toolbar>
            </AppBar>
        </div>
    )}
}

const mapStateToProps = state => {
  return {
    user: state.login.user,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logout: logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
