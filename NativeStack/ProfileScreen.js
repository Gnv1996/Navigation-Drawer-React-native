import React from "react";
import { View,Button } from "react-native";


const ProfileScreen=({navigator})=>{
    return(
        <View>

<Button title='Go to Notification' onPress={()=>{navigator.navigate('Notifications')}}/>
<Button title='Go back' onPress={navigator.goBack()}/> 
            </View>    )

}
export default ProfileScreen;