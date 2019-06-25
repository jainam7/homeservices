import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class Logo extends Component {
    render(){
        return(
        <View style={styles.container}> 
            <Image
            style={{width: 120, height: 130}}
            source={require('../Images/home.jpg')}
          />
            <Text style={styles.logoText}>
                Welcome To My App.
            </Text>
        </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoText:{
        marginVertical:15,
        fontSize:18,
        color:'rgba(255,255,255,0.7)'
    }
});
