import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const userData = { username: "admin", password: "1234"}

class LoginMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: ""}
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text>Username</Text>
        <TextInput
          style = {styles.input}
          autoCapitalize = 'none'
          onChangeText = {(username) => this.setState({username})}
        />
        <Text>Password</Text>
        <TextInput
          style = {styles.input}
          autoCapitalize ='none'
          secureTextEntry = {true}
          onChangeText = {(password) => this.setState({password})}
        />
        <Button
          title = "Login"
          onPress = {this.signin}
        />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
  }
});
