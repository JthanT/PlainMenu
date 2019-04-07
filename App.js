import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
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
        <Text style={styles.createAcount}>Create Account</Text>
      </View>
    );
  }
}

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
