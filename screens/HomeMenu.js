import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default class HomeMenu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
          style={styles.login}
          title="Login"
        />
        <Button 
          style={styles.create}
          title="Create Account"
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
  login: {
    width: 100,
    height: 100
  },
  create: {
    width: 100,
    height: 100
  }
});
