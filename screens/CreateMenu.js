import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CreateMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CreateMenu</Text>
      </View>
    );
  }
}

export default CreateMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe5fd',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
