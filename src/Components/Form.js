import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Enter Email Id"
                    placeholderTextColor="#ffffff"
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password" 
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical:16
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    button:{
        width:300,
        backgroundColor:'#1c313a',
        borderRadius:25,
        marginVertical:16,
        paddingVertical:13

    }
});
