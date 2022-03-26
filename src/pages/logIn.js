import React from "react";
import styles from "./../styles/logInStyles.scss";
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import Logo from "./../../assets/logo.png"

export default function LogIn({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <StatusBar hidden />
        <View style={styles.div}>
          <View style={styles.icon}>
            <Image source={Logo} style={styles.iconLogo}></Image>
          </View>
          <Text style={styles.title} >Crypto</Text>
          <Text style={styles.subtitle} >O maior marketplace de NFTs do Brasil</Text>
          <View style={styles.divInput}>
            <TextInput
              style={styles.inputLogin}
              placeholder="Login"
              placeholderTextColor="lightgrey"
            />
            <TextInput
              style={styles.inputPassword}
              placeholder="Senha"
              placeholderTextColor="grey"
            />
          </View>
          <TouchableOpacity style={styles.buttonEntrar} onPress={() => navigation.navigate('Dashboard')}><Text style={{ color: "#fff" }} >Entrar</Text></TouchableOpacity>
            <View style={styles.divider} />
          <TouchableOpacity style={styles.buttonOutline}><Text style={{ color: "#fff" }} >Entrar com Metamask</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}