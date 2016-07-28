/* @flow */
'use strict';

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import ProjectsStyle from './projectsStyle';
import _ from 'lodash';

export default function ProjectItem(props) {
  return(
    <TouchableOpacity onPress={() => this.onItemSelected(props.project.id)}>
   	  <View style={_.includes(props.selected, props.project.id) ? ProjectsStyle.projectItemSelected : ProjectsStyle.projectItem}>
        <View style={ProjectsStyle.projectItemLeft}>
          <View style={ProjectsStyle.projectItemSelect}>
            <Text style={ProjectsStyle.highlightedFont}>{props.project.title}</Text>
            <View style={ProjectsStyle.directorContainer}>
              <Text style={ProjectsStyle.normalFont}>{props.project.director}</Text>
            </View>
          </View>
        </View>
        <View style={ProjectsStyle.projectItemRight}>
          <View style={ProjectsStyle.actionsContainer}>
            <View style={props.project.actions > 0 ? ProjectsStyle.activeActions : ProjectsStyle.inactiveActions}>
              <Text>{props.project.actions}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.onSchedulePressed(props.project.id)}>
            <View style={ProjectsStyle.projectItemIconContainer}>
              <Text style={ProjectsStyle.projectItemIcon}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  onItemSelected() {
    props.onItemSelected();
  }

  onSchedulePressed() {
    props.onSchedulePressed();
  }
}
