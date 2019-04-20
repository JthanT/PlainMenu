import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

class CreateMenu extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>Create Account</Text>
        <Text style = {styles.usernameText}>Username</Text>
        <TextInput
          style = {styles.input}
        />
        <Text style = {styles.passwordText}>Password</Text>
        <TextInput
          style = {styles.input}
        />
        <Text style = {styles.emailText}>Email Address</Text>
        <TextInput
          style = {styles.input}
        />
        <TouchableOpacity
          style = {styles.button}
        >
          <Text style = {styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CreateMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe5fd',
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 30,
  },
  usernameText: {
    marginTop: 18,
    marginLeft: 20,
    fontSize: 18,
  },
  passwordText: {
    marginTop: 18,
    marginLeft: 20,
    fontSize: 18,
  },
  emailText: {
    marginTop: 18,
    marginLeft: 20,
    fontSize: 18,
  },
  input: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    fontSize: 15,
    height: 45
  },
  button: {
    backgroundColor: '#467df0',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff'
  }
});
