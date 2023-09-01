import { createStackNavigator } from '@react-navigation/stack';
import {Text} from "react-native"
import Information from "../../components/Information"

const Stack = createStackNavigator();

export default InformationStack = () => {
  return (
  <Stack.Navigator>
         <Stack.Screen name="Information Stack" component={Information} />
    </Stack.Navigator>
  );
}