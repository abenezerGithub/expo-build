import {View,Text,Button,TouchableOpacity,StyleSheet} from "react-native"

export default HomeHeader = () => {
  return (
     <View style = {styles.headerContainer}>
       <View style = {styles.headerLogoContainer} >
        <Text> 
        Logo
        </Text>
    </View>
    </View>
    )
};

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection:"row",
    backgroundColor:"red",
  },
  headerLogoContainer:{
    backgroundColor:"green"
  },
  avatarContainer:{
    backgroundColor:"blue",
  },
  avatar:{
    
  }
})