/* @flow */
'use strict';

import { StyleSheet, Navigator, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const navHeight = Navigator.NavigationBar.Styles.General.TotalNavHeight

export default StyleSheet.create({
  highlightedFont: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  normalFont: {
    fontSize: 16,
    color: 'black'
  },

  container: {
    height: deviceHeight - navHeight,
    width: deviceWidth,
    paddingTop: navHeight,
  },

  projectItem: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent',
  },

  projectItemSelected: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#008EC2',
  },

  projectItemLeft: {
    flex: 0.6,
    flexDirection: 'column',
    overflow: 'hidden',
    marginRight: 10,
  },

  directorContainer: {
    marginTop: 20,
  },

  projectItemRight: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },

  actionsContainer: {
    height: 60,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 5,
  },

  activeActions: {
    alignItems: 'center',
    width: 25,
    height: 25,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
  },

  inactiveActions: {
    width: 25,
    height: 25,
    marginRight: 20,
    opacity: 0,
  },

  projectItemIconContainer: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  projectItemIcon: {
    fontSize: 30,
    color: 'black',
  },

  separator: {
    height: 1,
    backgroundColor: 'black',
    marginLeft: 10,
    marginRight: 10,
  },
});
