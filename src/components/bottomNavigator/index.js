import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from "./../src/pages/dashboard";
import NFT from "./../src/pages/nft";
import Profile from "./../src/pages/profile";

const Tab = createBottomTabNavigator();

export default function DashboardNavigation() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel:  false, 
            tabBarStyle: {backgroundColor: '#23202e', elevation: 0}, 
          }}>
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="NFT" component={NFT} />
          <Tab.Screen name="Pofile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}