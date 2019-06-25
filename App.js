/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import Component1 from './Component'
import Login from './src/Pages/login'
import Logo from './src/Components/logo'
import Form from './src/Components/Form'
export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
           <Login/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'green'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
