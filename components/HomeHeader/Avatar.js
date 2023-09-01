import {View,Text,Button,TouchableOpacity,StyleSheet} from "react-native"

export default HomeHeaderAvatar = () => {
  return (
     <View style = {styles.avatarContainer}>
       <View style = {styles.avatar}>
         <Text style = {{fontFamily:"Roboto-Black"}} > 
             A
         </Text>
    </View>
    </View>
    )
};

const styles = StyleSheet.create({
  avatarContainer:{
    marginRight:12,
   marginVertical:5
  },
  avatar:{
    width:35,
    height:35,
    borderWidth:2,
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center"
  }
})