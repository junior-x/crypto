import React from "react";
import Dashboard from "./src/pages/dashboard";
import LogIn from "./src/pages/logIn";
import Profile from "./src/pages/profile";

import { SafeAreaView, StatusBar } from "react-native"

export default function App() {
  return (
    <>
      <SafeAreaView>
        <StatusBar hidden />
        {/* <LogIn /> */}
        {/* <Dashboard /> */}
        <Profile/>
      </SafeAreaView>
    </>
  );
}