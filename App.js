import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from './component/Home.js'
import Setting from "./component/Setting.js";
import { NavigationContainer } from '@react-navigation/native';
import MyWeb from "./component/Myweb";

const Drawer=createDrawerNavigator()

function App(){
  return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Upwork">
      <Drawer.Screen name='Upwork' component={MyWeb} />
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Setting' component={Setting} />
    </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;