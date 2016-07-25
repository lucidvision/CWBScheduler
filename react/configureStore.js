/* @flow */

'use strict';

import { createStore, combineReducers } from 'redux';

const store = createStore(combineReducers({user, project, audition}));
