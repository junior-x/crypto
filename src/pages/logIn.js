import React from "react";
import styles from "./../styles/logInStyles.scss";
import { 
  StatusBar,
  SafeAreaView, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity
} from "react-native";

export default function LogIn() {
  return (
    <>
      <SafeAreaView>
        <StatusBar hidden/>
        <View style={styles.div}>
          <View style={styles.icon} />
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
          <TouchableOpacity style={styles.buttonEntrar}><Text style={{color: "#fff"}} >Entrar</Text></TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.buttonOutline}><Text style={{color: "#fff"}} >Entrar com Metamask</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

// const styles = StyleSheet.create({
//   div: {
//     height: "100%",
//     backgroundColor:  "#23202e",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   divInput: {
//     width: "81%",
//     marginVertical: 45,
//   },
//   inputLogin: {
//     height: 51,
//     borderWidth: 1,
//     borderColor: "grey",
//     width: "100%",
//     padding: 10,
//     borderTopLeftRadius: 21,
//     borderTopRightRadius: 21,
//   },
//   inputPassword: {
//     height: 51,
//     borderWidth: 1,
//     borderColor: "grey",
//     width: "100%",
//     padding: 10,
//     borderBottomLeftRadius: 21,
//     borderBottomRightRadius: 21,
//   },
//   buttonEntrar: {
//     display: "flex",
//     backgroundColor: "#604e99",
//     alignItems: "center",
//     justifyContent:"center",
//     width: "70%",
//     height: 45, 
//     borderRadius: 12,
//   },
//   buttonOutline: {
//     alignItems: "center",
//     justifyContent:"center",
//     width: "70%",
//     height: 45, 
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
//   title: {
//     fontSize: 42,
//     fontWeight: "bold",
//     color: "#FAFAFA",
//   },
//   subtitle: {
//     color: "grey",
//   },
//   divider: {
//     marginVertical: 45,
//     height: 1,
//     color: "grey",
//   },
//   icon: {
//     height: 120,
//     width: 120,
//     borderRadius: 90,
//     borderColor: "grey",
//     borderWidth: 1,
//   },
// });