import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen.js";
import SettingScreen from "./SettingScreen.js";

const Bottom=createBottomTabNavigator();

const MyTab=()=>{
    <Bottom.Navigator>
    <Bottom.Screen name='HomeScreen'  component={HomeScreen}/>
    <Bottom.Screen name='SettingScreen' component={SettingScreen}/>
    </Bottom.Navigator>

}
export default MyTab;