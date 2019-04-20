import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class ProfileMenu extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.menuContainer}>
          <TouchableOpacity
            style = {styles.logoutButton}
            onPress = {() => this.props.navigation.navigate('Home')}
          >
            <Text style = {styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ProfileMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe5fd',
  },
  menuContainer: {
    flexDirection: 'row',
    backgroundColor: '#cfe5fd',
  },
  logoutButton: {
    backgroundColor: '#467df0',
    marginTop: 15,
    marginLeft: 20,
  },
  logoutText: {
    textAlign: 'center',
    color: '#ffffff'
  },
});
