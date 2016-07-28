/* @flow */
'use strict';

import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/login/loginContainer';
import Projects from './components/projects/projectsContainer';
import Schedule from './components/schedule/scheduleContainer';
import History from './components/history/historyContainer';
import Message from './components/message/messageContainer';
import Materials from './components/materials/materialsContainer';

export default class RootRouter extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="login" component={Login} initial={true} />
        <Scene key="projects" component={Projects} title="Projects" />
        <Scene key="schedule" component={Schedule} title="Schedule" />
        <Scene key="history" component={History} title="History" />
        <Scene key="message" component={Message} title="Message" />
        <Scene key="materials" component={Materials} title="Materials" />
      </Scene>
    </Router>
  }
}
