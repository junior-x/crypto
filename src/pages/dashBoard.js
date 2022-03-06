import React from "react";
import styles from "./../styles/dashBoardStyles.scss";
import { 
  StatusBar,
  SafeAreaView, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

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
            <View style={styles.divider} >
              <TouchableOpacity style={styles.buttonPost}>
                <Text style={{color: "#fff"}} >Photo</Text>
                <TouchableOpacity style={styles.buttonPostInside}>
                  <View style={styles.userIcon}>
                    <View style={styles.iconDashboard} />
                    <View style={styles.userIconText}>
                      <Text style={{color: "grey"}}>Owned by</Text>
                      <Text style={{color: "#FAFAFA"}}>Juniorx</Text>
                    </View>
                  </View>
                  <View style={styles.value}>
                    <Text style={{color: "grey"}}>Price</Text>
                    <Text style={{color: "#FAFAFA"}}>1.2 ETH</Text>
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonPost}>
                <Text style={{color: "#fff"}} >Photo</Text>
                <TouchableOpacity style={styles.buttonPostInside}>
                  <View style={styles.userIcon}>
                    <View style={styles.iconDashboard} />
                    <View style={styles.userIconText}>
                      <Text style={{color: "grey"}}>Owned by</Text>
                      <Text style={{color: "#FAFAFA"}}>Juniorx</Text>
                    </View>
                  </View>
                  <View style={styles.value}>
                    <Text style={{color: "grey"}}>Price</Text>
                    <Text style={{color: "#FAFAFA"}}>1.2 ETH</Text>
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}