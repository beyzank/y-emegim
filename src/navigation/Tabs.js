import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import AddNewRecipe from '../screens/AddNewRecipe';
import StackNav from './StackNav';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'home';

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = 'ios-settings-outline';
          } else if (route.name === 'AddRecipe') {
            iconName = 'book-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={StackNav} />
      <Tab.Screen name="AddRecipe" component={AddNewRecipe} />
      <Tab.Screen name="Settings" component={Profile} />
    </Tab.Navigator>
  );
};
export default Tabs;
