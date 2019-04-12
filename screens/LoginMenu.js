import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class LoginMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LoginMenu</Text>
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
  }
});
