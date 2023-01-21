import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import AddNewRecipe from '../screens/AddNewRecipe';
import StackNav from './StackNav';

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNav} />
      <Tab.Screen name="AddRecipe" component={AddNewRecipe} />
      <Tab.Screen name="Settings" component={Profile} />
    </Tab.Navigator>
  );
};
export default Tabs;
