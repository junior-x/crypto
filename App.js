
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from "./src/pages/dashboard";
import NFT from "./src/pages/nft";
import Profile from "./src/pages/profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel:  false, 
            tabBarStyle: {backgroundColor: '#23202e', elevation: 0}, 
          }}>
          <Tab.Screen name="Activity" component={Dashboard} />
          <Tab.Screen name="NFT" component={NFT} />
          <Tab.Screen name="Pofile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

function HomeScreen() {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

function SettingsScreen() {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Settings</Text>
        </View>
      </SafeAreaView>
    </>
  );
}