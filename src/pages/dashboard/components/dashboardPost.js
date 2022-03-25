import React from "react";
import styles from "./../../../styles/dashBoardStyles.scss";
import PostImage from "./../../../../assets/img/img01.png";
import PostIcon from "./../../../../assets/img/icon.png";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export default function DashboardPost() {
  return (
    <>
      <View style={styles.divider} >
        <View style={styles.div}>
          <View style={styles.divider} >
            <View style={styles.dividerImage}>
              <Image source={PostImage} resizeMode='cover'  style={styles.imagePost}></Image>
            </View>
            <TouchableOpacity style={styles.buttonPost}>
              <View />
              <TouchableOpacity style={styles.buttonPostInside}>
                <View style={styles.userIcon}>
                  <View style={styles.iconDashboard}><Image source={PostIcon} resizeMode='contain' style={styles.iconDashboardImage}></Image></View>
                  <View style={styles.userIconText}>
                    <Text style={{ color: "grey" }}>Owned by</Text>
                    <Text style={{ color: "#FAFAFA" }}>Juniorx</Text>
                  </View>
                </View>
                <View style={styles.value}>
                  <Text style={{ color: "grey" }}>Price</Text>
                  <Text style={{ color: "#FAFAFA" }}>1.2 ETH</Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}