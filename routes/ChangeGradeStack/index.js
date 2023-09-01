import { createStackNavigator } from '@react-navigation/stack';
import useDrawerHeaderShown from "../../hooks/useDrawerHeaderShow"
import {Text} from "react-native"

import ChangeGrade from "../../components/ChangeGrade"
import ChangeGradeSub from "../../components/ChangeGrade/sub"

const Stack = createStackNavigator();

export default ChangeGradeStack = ({navigation}) => {
  const screenOptions = {
   animationTypeForReplace:"push",
   gestureEnabled:true,
  }
  return (
  <Stack.Navigator screenOptions = {screenOptions}>
       <Stack.Screen name="Change Grade page" component={ChangeGrade} options = {{
        cardStyle:{
          backgroundColor:"#333"
        }
       }} />
       <Stack.Screen name = {"Change Grade Sub"} component = {ChangeGradeSub}/>
    </Stack.Navigator>
  );
}