import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HomeMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeMenu</Text>
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
