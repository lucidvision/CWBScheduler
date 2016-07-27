/* @flow */
'use strict';

import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import style from '../shared/style.js';
import loginStyle from './loginStyle.js';
import { Actions } from 'react-native-router-flux';
import { postSession } from '../../network/api';

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "tymans",
      password: "tymansint",
    }
  }

  render() {
    return(
      <View style={loginStyle.container}>
        <Image source={require('../../images/cwb_logo.png')} style={loginStyle.logo} />
        <Text style={loginStyle.titleText}>Scheduler</Text>
        <TextInput
          style={loginStyle.textField}
          placeholder="Username"
          value={this.state.username}
          onChangeText={(username) => this.setState({username})} />
        <TextInput
          style={loginStyle.textField}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(password) => this.setState({password})} />
        <TouchableOpacity style={loginStyle.loginButton} onPress={() => this.login()}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  async login() {
    let data = `username=${this.state.username}&password=${this.state.password}&remember_password=no&doAction=mobileactorupload`;
    let userData;
    try {
      const response = await postSession(data);
      userData = {
        id: response.id,
        firstName: response.firstName,
        lastName: response.lastName,
        type: response.type,
      }
    } catch(error) {
      console.error(error);
    }
    this.props.userActions.saveUser(userData);
    Actions.projects();
  }
}

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const UserActions = require('../../actions/user');

function mapStateToProps({user}) {
  return {
	  user
  }
}

function mapDispatchToProps(dispatch) {
  return {
	   userActions: bindActionCreators(UserActions, dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
