import React from "react";
import { View,Text,StyleSheet } from "react-native";


const HomeScreen=()=>{
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
        <View style={{backgroundColor:'red'}}>
            <Text style={Styles.title}>Welcome in  Home Screen</Text>
        </View>
    )
}
export default HomeScreen;