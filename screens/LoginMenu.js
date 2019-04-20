import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const userData = { username: "admin", password: "1234"}

class LoginMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.usernameText}>Username</Text>
        <TextInput
          style = {styles.input}
          autoCapitalize = 'none'
          onChangeText = {(username) => this.setState({username})}
        />
        <Text style = {styles.passwordText}>Password</Text>
        <TextInput
          style = {styles.input}
          autoCapitalize ='none'
          secureTextEntry = {true}
          ref = {this.passInput}
          onChangeText = {(password) => this.setState({password})}
        />
        <TouchableOpacity
          style = {styles.button}
          onPress = {this.signin}
        >
          <Text style = {styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  signin = async () => {
    if(userData.username != this.state.username || userData.password != this.state.password) {
      alert("Incorrect Username or Password")
    } else {
      this.props.navigation.navigate('Profile')
    }
  }

}

export default LoginMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe5fd',
  },
  usernameText: {
    fontSize: 17,
    marginLeft: 20,
    marginTop: 20
  },
  passwordText: {
    fontSize: 17,
    marginLeft: 20,
  },
  input: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
    height: 50,
    fontSize: 20,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: '#467df0',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff'
  },
});
