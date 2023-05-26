import { NavigationContainer } from "@react-navigation/native";
import MyTab from "./Bottom/MyTab.js";
import MyStack from "./Stack/MyStack.js";



function App(){
  return(
    <NavigationContainer>
      <MyTab/>
      <MyStack/>
    </NavigationContainer>
  )
}
export default App;