import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import Logo from '../Components/logo'
import Form from '../Components/Form'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form />
                <View style={styles.signupText}>
                  
                        <Text style={styles.signupButton}>
                            Don't have an account?
                    </Text>
                        <Text style={styles.buttonSign}>
                            Signup
                        </Text>
                   

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupText: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupButton: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
    },
    buttonSign: {
        color: '#ffffff',
        fontSize: 15
    }
});