import React from "react";
import {View,Button} from 'react-native';


const SettingsScreen=({navigation})=>{
    return(
        <View>
            <Button title="Go back" onPress={() => navigation.goBack()} />

        </View>
    )
}
export default SettingsScreen;