/* @flow */
'use strict';

import React, { Component } from 'react';
import { View, ScrollView  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import style from '../shared/style.js';
import ProjectsStyle from './projectsStyle';
import ProjectsList from './projectsList';

export default class ProjectsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      selected: []
    }
  }

  componentWillMount() {
    this.populateProjectList();
  }

  render() {
    return(
      <View>
        <ProjectsList projects={this.state.projects} selected={this.state.selected} />
      </View>
    );
  }

  populateProjectList() {
    const dummyProjects = [
      {
        id: 1,
        title: 'Batman Returns',
        director: 'Jeff Rose',
        phone: '777-7777',
        actions: 3,
      },
      {
        id: 2,
        title: 'Star Trek',
        director: 'Susan Fox',
        phone: '888-8888',
        actions: 2,
      }
    ]

    this.setState({
      projects: dummyProjects
    })
  }
}
