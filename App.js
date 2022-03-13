import React from "react";
import { NavigationContainer } from '@react-navigation/material-bottom-tabs';

import BottomNavigator from "./src/components/bottomNavigator";

export default function App() {

  return (
    <>
      <NavigationContainer>
        <BottomNavigator/>
      </NavigationContainer>
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