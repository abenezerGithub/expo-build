import { createStackNavigator } from '@react-navigation/stack';
import {Text} from "react-native"
import Settings from "../../components/Settings"

const Stack = createStackNavigator();

export default SettingsStack = () => {
  return (
  <Stack.Navigator>
         <Stack.Screen name="Settings Stack" component={Settings} />
    </Stack.Navigator>
  );
}