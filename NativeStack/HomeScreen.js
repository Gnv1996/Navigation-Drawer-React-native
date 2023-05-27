import React from "react";
import { View, Text, Button } from 'react-native';



const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Welcome in Native Stack</Text>
            <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
        </View>

    )
}
export default HomeScreen;