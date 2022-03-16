import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from "./src/pages/logIn";
import Dashboard from "./src/pages/dashboard";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
            headerShown: false, 
          }}>
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          // options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}