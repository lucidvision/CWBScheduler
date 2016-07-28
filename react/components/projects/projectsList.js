/* @flow */
'use strict';

import React, { Component } from 'react';
import { ScrollView, ListView, View } from 'react-native';
import ProjectsStyle from './projectsStyle';
import ProjectItem from './projectItem';

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.projects)
    }
  }

  render() {
    return(
      <View style={ProjectsStyle.container}>
        <ScrollView>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            renderSeparator={this.renderSeparator} />
        </ScrollView>
      </View>
    );
  }

  renderRow(project) {
    return <ProjectItem
             project={project}
             selected={this.props.selected}
             onItemSelected={this.onItemSelected()}
             onSchedulePressed={this.onSchedulePressed()} />
  }

  renderSeparator(sectionID, rowID) {
    return <View key={`${sectionID}-${rowID}`} style={ProjectsStyle.separator} />
  }

  onItemSelected() {

  }

  onSchedulePressed() {

  }
}
