import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Feed from "./Feed";
import Article from "./Article";
import 'react-native-gesture-handler';


const Drawer=createDrawerNavigator();

const MyDrawer=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Feed' component={Feed}/>
            <Drawer.Screen name='Article' component={Article}/>

        </Drawer.Navigator>
    )   
}
export default MyDrawer;