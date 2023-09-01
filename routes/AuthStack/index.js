import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "./Welcome"
import Login from "./Login"
import Signup from "./Signup"

const Stack = createStackNavigator();

export default AuthStack = () => {
  
  return (
    <Stack.Navigator screenOptions = {{headerShown:false,backgroundColor:"red",cardStyle:{BackgroundColor:palette.light}}} >
    <Stack.Screen name = "welcome" component = {Welcome}/>
     <Stack.Screen name = "login" component = {Login} />
     <Stack.Screen name = "signup" component = {Signup} />
    </Stack.Navigator>
    )
}