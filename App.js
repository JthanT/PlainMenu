import React from 'react';
import { AsyncStorage, StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeMenu from './screens/HomeMenu.js'
import LoginMenu from './screens/LoginMenu.js'
import CreateMenu from './screens/CreateMenu.js'


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
  },
  Create: {
    screen: CreateMenu,
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
