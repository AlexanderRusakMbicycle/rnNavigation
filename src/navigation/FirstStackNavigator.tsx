import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SimpleScreenComponent} from '../components/SimpleScreenComponent';

const Stack = createNativeStackNavigator();

export const FirstStackNavigator = () => {
  return (
    <Stack.Navigator
    /*  screenOptions={{
        headerShown: false,
      }} */
    >
      <Stack.Screen name="StackFirst">
        {props => (
          <SimpleScreenComponent
            {...props}
            name="StackFirst"
            next="StackSecond"
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="StackSecond">
        {props => (
          <SimpleScreenComponent
            {...props}
            name="StackSecond"
            next="StackThird"
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="StackThird">
        {props => (
          <SimpleScreenComponent
            {...props}
            name="StackThird"
            next="StackForth"
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="StackForth">
        {props => (
          <SimpleScreenComponent
            {...props}
            name="StackForth"
            next={null}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
