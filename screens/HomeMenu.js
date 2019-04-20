import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class HomeMenu extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity
          style = {styles.button}
          onPress = {() => this.props.navigation.navigate('Login')}
        >
          <Text style = {styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {styles.button}
          onPress = {() => this.props.navigation.navigate('Create')}
        >
          <Text style = {styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe5fd',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#467df0',
    margin: 25,
    padding: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
  },
});
