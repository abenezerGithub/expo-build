import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer,DefaultTheme} from "@react-navigation/native"
import {TouchableOpacity,View,Text} from "react-native"
import Home from "../../components/Home"
import DrawerProvider from "../../context/DrawerContext"
import Mathmatics from "../MathmaticsTab"


import HomeHeaderLogo from "../../components/HomeHeader/Logo"
import HomeHeaderAvatar from "../../components/HomeHeader/Avatar"

import Icons from "../../constants/icons";
import sizes from "../../constants/sizes";
import fonts from "../../constants/fonts"

const Stack = createStackNavigator();
export default HomeStack = ({navigation}) => {
  return ( 
    <NavigationContainer independent = {true}>
    <Stack.Navigator>
         <Stack.Screen name="Home Stack" component={Home} options = {{
        headerLeft:(props) => Icons.Menu(navigation),
           headerShown:true,
         headerTitle:() => <HomeHeaderLogo/>,
         headerRight:() => <HomeHeaderAvatar/>,
         headerStyle:{
         borderBottomWidth:1,
       borderBottomColor:palette.headerBorder
     }
         }}/>
         <Stack.Screen name = "Mathmatics"
           component = {Mathmatics}
           options = { ({navigation}) => ({
            headerLeft: (props) => {
      return (  <TouchableOpacity activeOpacity = {.4} style = {{
              marginLeft:12,
              marginVertical:8,
              padding:3,
            }} onPress = {() => navigation.navigate("Home Stack")} >
            {Icons.Left}
            </TouchableOpacity>
          )  },
           headerTitle:() => (
            <View style = {{
              justifyContent:"center",
              alignItems:"center",
            }}>
            <Text style = {{
              fontFamily:fonts.primary,
              fontSize:sizes.h2,
              fontWeight:"bold"
            }}>
            Mathematics
            </Text>
            </View>
            )
         })}/>
         
         
    </Stack.Navigator>
  </NavigationContainer>
  );
}

