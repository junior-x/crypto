import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from "./../src/pages/dashboard";
import NFT from "./../src/pages/nft";
import Profile from "./../src/pages/profile";

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
// import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import Dashboard from "./src/pages/dashboard";
// import Profile from "./src/pages/profile";
// import NFT from "./src/pages/nft";


// export default function BottomNavigator() {

//   const Tab = createMaterialBottomTabNavigator();
  
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Dashhboard" component={Dashboard} />
//       <Tab.Screen name="Profile" component={Profile} />
//       <Tab.Screen name="NFT" component={NFT} />
//     </Tab.Navigator>
//   );
// }

// import React from "react";

// export default function BottomNavigator() {
//     return(
//         <>
//         </>
//     );
// }

// import * as React from 'react';
// import { BottomNavigation, Text } from 'react-native-paper';

// const MusicRoute = () => <Text>Music</Text>;

// const AlbumsRoute = () => <Text>Albums</Text>;

// const RecentsRoute = () => <Text>Recents</Text>;

// const BottomNavigator = () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'music', title: 'Music', icon: 'queue-music' },
//     { key: 'albums', title: 'Albums', icon: 'album' },
//     { key: 'recents', title: 'Recents', icon: 'history' },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     music: MusicRoute,
//     albums: AlbumsRoute,
//     recents: RecentsRoute,
//   });

//   return (
//     <BottomNavigation
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//     />
//   );
// };

// export default BottomNavigator;