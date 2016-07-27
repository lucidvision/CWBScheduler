/* @flow */
'use strict';

import React, { Component } from 'react';
import { ScrollView,  } from 'react-native';
import style from '../shared/style.js';
import projectsStyle from './projectsStyle.js';
import { Actions } from 'react-native-router-flux';

export default class ProjectsContainer extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      projects: [],
      selected: [],
    }
  }

  render() {
    return(
      <ScrollView>
        
      </ScrollView>
    );
  }
}
