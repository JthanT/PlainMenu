import React from 'react';
import { StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import CreateMenu from './screens/CreateMenu.js'
import HomeMenu from './screens/HomeMenu.js'
import LoginMenu from './screens/LoginMenu.js'
import ProfileMenu from './screens/ProfileMenu.js'


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: { 
    screen: HomeMenu,
    navigationOptions: {
      header: null,
    },
  },
  Login: { 
    screen: LoginMenu,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#467df0'
     },
    },
  },
  Create: {
    screen: CreateMenu,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#467df0'
      },
    },
  },
  Profile: {
    screen: ProfileMenu,
  },
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe5fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
