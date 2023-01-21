import HomePage from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
export default StackNav;
