import {View,Button,Text} from "react-native"
export default ChangeGradeSub = ({navigation}) => {
  return (
    <View>
    <Text>Change Grade Sub</Text>
    <Button title = "Navigate" onPress = {() => navigation.navigate("Change Grade page")}/>
    </View>
  )
}