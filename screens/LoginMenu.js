import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class LoginMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          style = {styles.input}
        />
        <Text>Password</Text>
        <TextInput
          style = {styles.input}
        />
        <Button
          title = "Login"
          
        />
      </View>
    );
  }
}

export default LoginMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe5fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
  }
});
