import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";


const Stack = createNativeStackNavigator();

const MyNativeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='Notifications' component={NotificationsScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} />
        </Stack.Navigator>

    )
}
export default MyNativeStack;