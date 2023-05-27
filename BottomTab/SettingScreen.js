import React from "react";
import {View,Text,ImageBackground,StyleSheet} from 'react-native';
import mandir from '../assets/mandir.jpg';


const SettingScreen=()=>{
    const Styles=StyleSheet.create({
        image:{
            height:700,
            width:400,

        },
        heading:{
            fontSize:37,
            justifyContent:'center',
            alignItems:'center',
            color:'brown',
            fontWeight:'bold',
            textAlign:'center',
            marginTop:520
        

        }

    })
    return(
        <View>
          <ImageBackground  source={mandir} style={Styles.image}>
            <Text style={Styles.heading}>World's Tallest Temple in the Word</Text>
            </ImageBackground>
        </View>
    )
}
export default SettingScreen;