import {useRef,useEffect} from "react"
import {Text,TouchableOpacity,StyleSheet} from "react-native"
import * as Animatable from "react-native-animatable"
import { AntDesign,MaterialIcons,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ExamStack from "../ExamStack"
import Models from "../../components/Mathmatics/Models"
import Others from "../../components/Mathmatics/Others"
import sizes from "../../constants/sizes"
import palette from  "../../constants/palette"
import fonts from   "../../constants/fonts"
const Tab = createBottomTabNavigator();

const tabData = [
  {title:"Exams",icon:"my-library-books",component:ExamStack},
   {title:"Models",icon:"model-training",component:Models},
   {title:"Others",icon:"menu-book",component:Others}
  ]
  
const TabButton = (props) =>  {
  const {tab,onPress,accessibilityState} = props;
  const focused = accessibilityState.selected
  const viewRef = useRef(null)
  
  useEffect(() => {
    if(focused) {
      viewRef.current.animate({0:{scale:.2},1:{scale:1.1}})
    }else {
     viewRef.current.animate({0:{scale:1.1},1:{scale:1}})
    }
  },[focused])
  
   return (
        <TouchableOpacity style = {styles.tabContainer} onPress = {onPress} activeOpacity = {.3}>
        <Animatable.View 
        ref = {viewRef}
        duration = {100}
        style = {styles.tabContainer} >
      <MaterialIcons name = {tab.icon} size={sizes.tabIcons}  color = {focused ? palette.tabIconActive : palette.tabIconInactive} />
       <Text style = {[styles.tabText,{color:focused ? palette.tabIconActive : palette.tabIconInactive}]} >{tab.title}</Text>
      </Animatable.View>
        </TouchableOpacity>
        )
     }

export default function Mathmatics({navigation}) {
  return (
      <Tab.Navigator screenOptions = {{
        headerShown:false,
        tabBarStyle:{
          height:60,
          position:"absolute",
          bottom:5,
          left:8,
          right:10,
          borderRadius:15,
          elevation:2
        }
      }}>
      {tabData.map(tab => {
        return (
     <Tab.Screen name = {tab.title}  component={tab.component} options = {{
            tabBarButton:(props) => <TabButton {...props} tab = {tab}  />
        }}  key = {tab.title}/>
        )
      })}
     </Tab.Navigator>
  );
} 


const styles = StyleSheet.create({
  tabContainer:{
          flex:1,
          justifyContent:"center",
          alignItems:"center",
        },
  tabText:{
         textAlign:"center",
          marginLeft:4,
          fontFamily:fonts.secondary
  }
})