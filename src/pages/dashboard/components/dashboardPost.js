import React from "react";
import styles from "./../../../styles/dashBoardStyles.scss";
import {  
  View, 
  Text, 
  TouchableOpacity,
} from "react-native";

export default function DashboardPost() {
  return (
    <>
      <View style={styles.divider} >
        <View style={styles.div}>
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
            </View>
        </View>
      </View>
    </>
  );
}