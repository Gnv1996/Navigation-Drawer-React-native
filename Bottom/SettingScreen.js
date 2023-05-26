import React from "react";
import { View,Text,StyleSheet } from "react-native";


const SettingScreen=()=>{
    const Styles=StyleSheet.create({
        title:{
            fontWeight:'bold',
            fontSize:32,
            color:'white',
            justifyContent:'center',
            alignItems:'center',
        }
    })
    return(
        <View style={{backgroundColor:'green'}}>
            <Text style={Styles.title}>Welcome in Setting Screen</Text>
        </View>
    )
}
export default SettingScreen;