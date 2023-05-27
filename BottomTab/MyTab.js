import React from "react";
import { Image} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen.js";
import SettingScreen from "./SettingScreen.js";
import home from '../assets/home.png'


const Tab=createBottomTabNavigator();


const MyTab=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='HomeScreen' component={HomeScreen}/>
        
            <Tab.Screen name='SettingScreen' component={SettingScreen}/>
        </Tab.Navigator>
    )
}
export default MyTab;