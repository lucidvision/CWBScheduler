/* @flow */
'use strict';

import React, { Component } from 'react-native';
import { Router, Route, Schema } from 'react-native-router-flux';
import Login from './components/login/loginContainer';
import Projects from './components/projects/projectsContainer';
import Schedule from './components/schedule/scheduleContainer';

export default class RootRouter extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="login" component={LoginContainer} title="Login" />
        <Scene key="projects" component={ProjectsContainer} title="Projects" />
        <Scene key="schedule" component={ScheduleContainer} title="Schedule" />
        <Scene key="history" component={HistoryContainer} title="History" />
        <Scene key="message" component={MessageContainer} title="Message" />
        <Scene key="materials" component={MaterialsContainer} title="Materials" />
      </Scene>
    </Router>
  }
}
