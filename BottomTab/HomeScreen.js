import React from "react";
import {View, Text,ImageBackground,StyleSheet} from 'react-native';
import Tajmahal from '../assets/Tajmahal.jpeg';


const HomeScreen=()=>{
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
            marginTop:530
        

        }

    })
    return(
        <View>
            <ImageBackground source={Tajmahal} resizeMode="cover" style={Styles.image}>

            <Text style={Styles.heading}>Welcome in Tajmahal</Text>
            </ImageBackground>
        </View>
        
    )
}
export default HomeScreen;