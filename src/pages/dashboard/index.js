import React from "react";
import styles from "./../../styles/dashBoardStyles.scss";
import { 
  StatusBar,
  SafeAreaView, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import DashboardPost from  "./components/dashboardPost"

export default function Dashboard() {
  return (
    <>
      <SafeAreaView>
        <StatusBar hidden/>
        <View style={styles.div}>
          <View style={styles.topBar}>
            <View style={styles.iconDashboard} />
            <View style={styles.iconBurger} />
          </View>
          <View style={styles.divInput}>
            <TextInput 
                style={styles.inputSearch}
                placeholder="    Pesquisa por categorias, artistas..." 
                placeholderTextColor="lightgrey" 
              />
            <View style={styles.searchButtons}>
              <TouchableOpacity style={styles.buttonFilter}><Text style={{color: "#fff"}} >Todos</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonFilter}><Text style={{color: "#fff"}} >3D</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonFilter}><Text style={{color: "#fff"}} >2D</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonFilter}><Text style={{color: "#fff"}} >GIFs</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonFilter}><Text style={{color: "#fff"}} >Illustrations</Text></TouchableOpacity>
            </View>
          </View>
          <ScrollView overflow={false}>
              <DashboardPost/>
              <DashboardPost/>
              <DashboardPost/>
              <DashboardPost/>
              <DashboardPost/>
              <DashboardPost/>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}