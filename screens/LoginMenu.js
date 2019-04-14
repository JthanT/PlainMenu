import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class LoginMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LoginMenu</Text>
        <Button
          title = "Logout"
          onPress = { () => this.props.navigation.navigate('Home')}
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
  }
});
