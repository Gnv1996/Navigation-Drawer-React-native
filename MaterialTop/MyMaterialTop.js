import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import SettingsScreen from './SettingsScreen';
import Contact from './Contact';
import { StyleSheet } from 'react-native';



const MaterialTop=createMaterialTopTabNavigator();
const MyMaterialTop=()=>{
    const Styles=StyleSheet.create({
        container:{
            marginTop:30,
            backgroundColor:'red',

        }
        
    })
    return(
       <MaterialTop.Navigator style={Styles.container}>
        <MaterialTop.Screen name='Home' component={HomeScreen}/>
        <MaterialTop.Screen name='Profile' component={Profile}/>
        <MaterialTop.Screen name='Setting' component={SettingsScreen}/>
        <MaterialTop.Screen name='Contact' component={Contact}/>
       </MaterialTop.Navigator>

    )
}
export default MyMaterialTop;