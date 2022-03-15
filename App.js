
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Profile from "./src/pages/profile";
import NFT from "./src/pages/nft";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen name="Home" component={Profile} />
        <Tab.Screen name="Settings" component={NFT} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return(

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
  return(

  <>
    <SafeAreaView>
      <View>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  </>
  );
}
// import React from "react";
// import { SafeAreaView, StatusBar } from "react-native";

// import Dashboard from "./src/pages/dashboard";
// import LogIn from "./src/pages/logIn";
// import Profile from "./src/pages/profile";
// import NFT from "./src/pages/nft";

// import BottomNavigator from "./src/components/bottomNavigator";

// export default function App() {

//   return (
//     <>
//       <SafeAreaView>
//         <StatusBar hidden />
//         <LogIn />
//         {/* <Dashboard /> */}
//         {/* <Profile/> */}
//         {/* <NFT /> */}
//         {/* <BottomNavigator />  */}
//       </SafeAreaView>
//     </>
//   );
// }