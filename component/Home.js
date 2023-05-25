import React from "react";
import {View,Text,StyleSheet} from 'react-native';


function App(){
    const Styles=StyleSheet.create({
        component:{
           textAlign:'center',
           justifyContent:'center',
           marginTop:200,
           fontSize:30,
      }
    })
    return(
        <View>
            <Text style={Styles.component}>Welcome in Home Page</Text>
        </View>
    )
}
export default App;