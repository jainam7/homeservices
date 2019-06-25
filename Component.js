import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View} from 'react-native';

export default class Component1 extends Component{
    render(){
        return(
            <View>
                <Text style={{ fontSize: 50,color:'red',alignContent:'center'}}>
                   {this.props.message}
                </Text>
            </View>
        );

    }
} 
AppRegistry.registerComponent('Component1',() => Component1); 