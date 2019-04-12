import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default class ProfileMenu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('./profile_picture_symbol.jpg')}
        />
        
        <Button 
          style={styles.logout}
          title="Log out"
        />
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
  logout: {
    fontSize: 10,
    margin: 30,
  }
});