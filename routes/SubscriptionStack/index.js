import { createStackNavigator } from '@react-navigation/stack';
import {Text} from "react-native"
import Subscription from "../../components/Subscription"

const Stack = createStackNavigator();

export default SubscriptionStack = () => {
  return (
  <Stack.Navigator>
         <Stack.Screen name="Subscription Stack" component={Subscription} />
    </Stack.Navigator>
  );
}