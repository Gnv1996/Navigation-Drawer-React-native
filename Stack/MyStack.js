import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Home.js';
import Profile from "./Profile.js";



const Stack=createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Profile' component={Profile}/>

        </Stack.Navigator>
    )
}
export default MyStack;