import React from 'react';
import ProfileMenu from './ProfileMenu.js'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('./profile_picture_symbol.jpg')}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
        />
        <Button 
          style={styles.createAcount}
          title="Create Account"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ProfileMenu />
      </View>
    );
  }
}

const Navigation = createStackNavigator({
  Profile: {screen: ProfileMenu}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe5fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100
  },
  input: {
    margin: 30
  },
  createAccount: {
    fontSize: 10,
    margin: 30,
    
  }
});
