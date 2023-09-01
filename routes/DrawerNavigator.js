import {useState} from "react"
import {createDrawerNavigator} from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {SafeAreaView,View,Text,AntDesignxt,StyleSheet} from "react-native"

import Icons from "../constants/icons";
import palette from "../constants/palette"

import HomeStack from "./HomeStack";
import ChangeGradeStack from "./ChangeGradeStack"
import SubscriptionStack from "./SubscriptionStack"
import InformationStack from "./InformationStack"
import SettingsStack from "./SettingsStack"

import DrawerBanner from "../components/DrawerBanner"

import HomeHeaderLogo from "../components/HomeHeader/Logo"
import HomeHeaderAvatar from "../components/HomeHeader/Avatar"


const Drawer = createDrawerNavigator()
export default DrawerNavigator = () => {
 const screenOptions = ({navigation}) => ({
    drawerActiveTintColor:palette.light,
    drawerActiveBackgroundColor:palette.bluish,
    drawerLabelStyle:[styles.drawerLabelStyle],
    drawerInactiveTintColor:palette.dark,
    drawerType:"slide",
    drawerStyle:{
    },
    overlayColor:"rgba(100,100,100,.1)",
    headerLeft:(props) => Icons.Menu(navigation),
    headerStyle:{
      borderBottomWidth:1,
      borderBottomColor:palette.headerBorder
    }
  })
  
  return (
       <Drawer.Navigator screenOptions = {screenOptions} drawerContent = {props => <DrawerBanner  {...props}/>}>
       <Drawer.Screen name = "Home" component= {HomeStack} options = {{
         drawerIcon:() => Icons.Home,
         drawerLabel:"Home",
         title:"Freedom learn",
         headerShown:false,
         headerTitle:() => <HomeHeaderLogo/>,
         headerRight:() => <HomeHeaderAvatar/>,
       }}  />
     <Drawer.Screen name = "Change Grade" component= {ChangeGradeStack} options = {{
         drawerIcon:() => Icons.ChangeGrade,
         drawerLabel:"Change Grade",
         title:"change Grade",
         headerShown:false
       }} />
       
      <Drawer.Screen name = "Subscription" component= {SubscriptionStack}  options = {{
         drawerIcon:() => Icons.Subscription,
         drawerLabel:"Subscription",
         title:"Subscription"
       }} />
       
        <Drawer.Screen name = "Information" component= {InformationStack} options = {{
         drawerIcon:() => Icons.Information,
         drawerLabel:"Information",
         title:"Information"
       }} />
        <Drawer.Screen name = "Settings" component= {SettingsStack} options = {{
         drawerIcon:() => Icons.Settings,
         drawerLabel:"Settings",
         title:"Settings"
       }}/>
       </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
  drawerLabelStyle:{
    marginLeft:-5
  },
  
})