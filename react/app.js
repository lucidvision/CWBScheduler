/* @flow */

'use strict';

import React, { Component } from 'react';
import RootRouter from './rootRouter';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import user from './reducers/user';
import project from './reducers/project';
import audition from './reducers/audition';

const store = createStore(combineReducers({user, project, audition}));

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <RootRouter />
      </Provider>
    )
  }
}
