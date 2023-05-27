import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import Profile from "./Profile";
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons'


const MaterialBottom = createBottomTabNavigator()

const MyMatBottom = () => {
    return (
        <MaterialBottom.Navigator>
            <MaterialBottom.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name='home' color={color} size={25}/>
                )
            }} />
            <MaterialBottom.Screen name='Setting' component={SettingsScreen} />
            <MaterialBottom.Screen name='Profile' component={Profile} />
        </MaterialBottom.Navigator>

    )
}
export default MyMatBottom;