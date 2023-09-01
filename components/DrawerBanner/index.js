import { DrawerContentScrollView, DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import {ScrollView,View,Text,StyleSheet,Image} from "react-native"
import Avatar from "react-native-user-avatar"
import Logo from "../../assets/svg/logo.svg"
import fonts from "../../constants/fonts"
import palette from "../../constants/palette"
import icons from "../../constants/icons"
import sizes from "../../constants/sizes"
export default  DrawerBanner = (props) => (
  <View style = {{position:"relative",height:"100%"}}>
   <DrawerContentScrollView {...props}>
    <DrawerBannerTop/>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    <DrawerBannerBottom/>
  </View>
    ) 
    
const DrawerBannerTop = () => {
  return (
    <View style = {styles.drawerBannerContainer}>
    <View style = {styles.bannerImageContainer} >
       <Logo width ={"95%"}  height = {90}/>
      </View>
      <View style = {styles.credContainer}>
         <View style = {styles.credAvatarContainer}>
          <Avatar textStyle = {{
            fontFamily:fonts.bold,
            marginTop:5,
            textTransform:"uppercase",
            display:"none"
          }} size = {70} name = "ABENEZER"/>
         <View style = {styles.credName}>
         <Text>Abenezer</Text>
         </View>
         </View>
         
         <View style = {styles.credEmailContainer}>
         <Text style = {{
           fontFamily:fonts.primary,
           fontSize:sizes.h6,
           paddingLeft:2,
           color:palette.grey,
           textTransform:"lowercase"
         }} >Abelatigstu@gmail.com</Text>
         </View>
      </View>
    </View>
    )
}

const DrawerBannerBottom = () => {
  return (
    <View style = {styles.drawerBannerBottomContainer}>
     <View style = {styles.drawerBottomLabel}>
      <DrawerItem label = "Join our Community" icon = {() => icons.Community} />
      <DrawerItem label = "Log out" icon = {() => icons.Logout} />
     </View>
    </View>
    )
}
 
 
 
const styles = StyleSheet.create({
  drawerBannerContainer:{
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:2,
    borderBottomWidth:2,
    borderBottomColor:palette.dark,
    marginBottom:8
  },
  bannerImageContainer:{
    width:"100%",
    paddingLeft:8,
  },
  bannerImage:{
    width:"80%",
    height:60,
    resizeMode:"contain"
  },
  credContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%",
    paddingVertical:2,
    paddingHorizontal:6,
  },
  credName:{
    justifyContent:"center",
    alignItems:"center"
  },
  credEmailContainer:{
    alignSelf:"flex-end",
    
  },
  drawerBannerBottomContainer:{
    padding:5,
    paddingVertical:8,
    borderTopWidth:1,
    borderTopColor:palette.primary
  }
})

