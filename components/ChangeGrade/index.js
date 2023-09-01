import {View,Button,Text} from "react-native"

export default ChangeGrade = ({navigation}) => {
  return (
    <View>
    <Text>Change Grade</Text>
    <Button title = "Navigate" onPress = {() => navigation.navigate("Change Grade Sub")}/>
    </View>
  )
}