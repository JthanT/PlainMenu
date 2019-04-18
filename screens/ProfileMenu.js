import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ProfileMenu extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text>ProfileMenu</Text>
      </View>
    );
  }
}

export default ProfileMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe5fd',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
