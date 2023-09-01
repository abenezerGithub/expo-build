import {View,Text,Button,TouchableOpacity,StyleSheet,Image} from "react-native"
import Logo from "../../assets/svg/logo.svg"
export default HomeHeader = () => {
  return (
     <View style = {styles.headerContainer}>
       <View style = {styles.headerLogoContainer} >
      <Logo width = {"80%"} maxWidth = {180} />
    </View>
    </View>
    )
};

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginLeft:8
  },
  headerLogoContainer:{
     width:"100%",
     alignItems:"center",
     justifyContent:"center",
     paddingTop:5,
     paddingLeft:10,
  }
})