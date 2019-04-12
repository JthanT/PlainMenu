import React from 'react';
import { StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeMenu from './screens/HomeMenu.js'
import ProfileMenu from './screens/ProfileMenu.js'


export default class App extends React.Component {
  render() {
    return (
      <StackNavigation />
    );
  }
}

const StackNavigation = createStackNavigator({
  Home: HomeMenu,
  Profile: ProfileMenu
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe5fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
