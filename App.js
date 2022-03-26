import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from "./src/pages/logIn";
import Dashboard from "./src/pages/dashboard";
import NFT from "./src/pages/nft";
import Profile from "./src/pages/profile";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
            headerShown: false, 
          }}>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="NFT" component={NFT} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
