import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {FirstStackNavigator} from './FirstStackNavigator';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
      <BottomTab.Screen name="First" component={FirstStackNavigator} />
      <BottomTab.Screen name="Second" component={FirstStackNavigator} />
      <BottomTab.Screen name="Third" component={FirstStackNavigator} />
      <BottomTab.Screen name="Forth" component={FirstStackNavigator} />
    </BottomTab.Navigator>
  );
};
