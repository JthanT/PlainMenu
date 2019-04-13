import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

class HomeMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title = "Login"
          onPress = { () => this.props.navigation.navigate('Login') }
        />
      </View>
    );
  }
}

export default HomeMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe5fd',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
