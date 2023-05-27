import React from "react";
import { View, Button } from 'react-native';


const NotificationsScreen = () => {
    return (
        <View>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>

    )
}

export default NotificationsScreen;