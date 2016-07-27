/* @flow */
'use strict';

import { StyleSheet } from 'react-native';

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 100,
    width: 126,
    marginBottom: 20,
  },

  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
  },

  textField: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: 20
  },

  loginButton: {
    backgroundColor: '#55FCFF',
    margin: 16,
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
  }
})

module.exports = loginStyle;
