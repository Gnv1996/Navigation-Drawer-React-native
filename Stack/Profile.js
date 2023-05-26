import React from "react";
import {View,Text,Button,StyleSheet} from 'react-native';



const Profile=({navigation})=>{
    const Styles=StyleSheet.create({
        title:{
            fontSize:32,
            margin:100,

        }

    })
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={Styles.title}>Welcome in Profile Screen</Text>
            <Button title='Go to Home Page' onPress={()=>navigation.navigate('Home')}/>
                 
        </View>
    )
}
export default Profile;