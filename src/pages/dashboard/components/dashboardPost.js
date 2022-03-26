import React from "react";
import styles from "./../../../styles/dashBoardStyles.scss";
import PostImage from "./../../../../assets/img/img01.png";
import PostImage2 from "./../../../../assets/img/img02.png";
import PostImage3 from "./../../../../assets/img/img03.png";
import PostImage4 from "./../../../../assets/img/img04.png";
import PostImage5 from "./../../../../assets/img/img05.png";
import PostImage6 from "./../../../../assets/img/img06.png";
import PostIcon from "./../../../../assets/img/icon.png";
///import { BlurView } from "@react-native-community/blur";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export default function DashboardPost({ navigation }) {
  return (
    <>
      <View style={styles.divider} >
        <View style={styles.div}>
          <View style={styles.divider} >
            <View style={styles.dividerImage}>
              <Image source={PostImage} resizeMode='cover'  style={styles.imagePost}></Image>
            </View>
            <TouchableOpacity style={styles.buttonPost} onPress={() => navigation.navigate('NFT')}>
              <View />
              <TouchableOpacity style={styles.buttonPostInside}>
                {/* <BlurView></BlurView> */}
                <View style={styles.userIcon}>
                  <View style={styles.iconDashboard}><Image source={PostIcon} resizeMode='contain' style={styles.iconDashboardImage}></Image></View>
                  <View style={styles.userIconText}>
                    <Text style={{ color: "#9e8ed3" }}>Owned by</Text>
                    <Text style={{ color: "#FAFAFA" }}>Juniorx</Text>
                  </View>
                </View>
                <View style={styles.value}>
                  <Text style={{ color: "#9e8ed3" }}>Price</Text>
                  <Text style={{ color: "#FAFAFA" }}>1.2 ETH</Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.divider} >
        <View style={styles.div}>
          <View style={styles.divider} >
            <View style={styles.dividerImage}>
              <Image source={PostImage2} resizeMode='cover'  style={styles.imagePost}></Image>
            </View>
            <TouchableOpacity style={styles.buttonPost}>
              <View />
              <TouchableOpacity style={styles.buttonPostInside}>
                <View style={styles.userIcon}>
                  <View style={styles.iconDashboard}><Image source={PostIcon} resizeMode='contain' style={styles.iconDashboardImage}></Image></View>
                  <View style={styles.userIconText}>
                    <Text style={{ color: "#9e8ed3" }}>Owned by</Text>
                    <Text style={{ color: "#FAFAFA" }}>Juniorx</Text>
                  </View>
                </View>
                <View style={styles.value}>
                  <Text style={{ color: "#9e8ed3" }}>Price</Text>
                  <Text style={{ color: "#FAFAFA" }}>1.2 ETH</Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          </View>
      </View>
      <View style={styles.divider} >
        <View style={styles.div}>
          <View style={styles.divider} >
            <View style={styles.dividerImage}>
              <Image source={PostImage3} resizeMode='cover'  style={styles.imagePost}></Image>
            </View>
            <TouchableOpacity style={styles.buttonPost}>
              <View />
              <TouchableOpacity style={styles.buttonPostInside}>
                {/* <BlurView></BlurView> */}
                <View style={styles.userIcon}>
                  <View style={styles.iconDashboard}><Image source={PostIcon} resizeMode='contain' style={styles.iconDashboardImage}></Image></View>
                  <View style={styles.userIconText}>
                    <Text style={{ color: "#9e8ed3" }}>Owned by</Text>
                    <Text style={{ color: "#FAFAFA" }}>Juniorx</Text>
                  </View>
                </View>
                <View style={styles.value}>
                  <Text style={{ color: "#9e8ed3" }}>Price</Text>
                  <Text style={{ color: "#FAFAFA" }}>1.2 ETH</Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.divider} >
        <View style={styles.div}>
          <View style={styles.divider} >
            <View style={styles.dividerImage}>
              <Image source={PostImage4} resizeMode='cover'  style={styles.imagePost}></Image>
            </View>
            <TouchableOpacity style={styles.buttonPost}>
              <View />
              <TouchableOpacity style={styles.buttonPostInside}>
                {/* <BlurView></BlurView> */}
                <View style={styles.userIcon}>
                  <View style={styles.iconDashboard}><Image source={PostIcon} resizeMode='contain' style={styles.iconDashboardImage}></Image></View>
                  <View style={styles.userIconText}>
                    <Text style={{ color: "#9e8ed3" }}>Owned by</Text>
                    <Text style={{ color: "#FAFAFA" }}>Juniorx</Text>
                  </View>
                </View>
                <View style={styles.value}>
                  <Text style={{ color: "#9e8ed3" }}>Price</Text>
                  <Text style={{ color: "#FAFAFA" }}>1.2 ETH</Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.divider} >
        <View style={styles.div}>
          <View style={styles.divider} >
            <View style={styles.dividerImage}>
              <Image source={PostImage5} resizeMode='cover'  style={styles.imagePost}></Image>
            </View>
            <TouchableOpacity style={styles.buttonPost}>
              <View />
              <TouchableOpacity style={styles.buttonPostInside}>
                {/* <BlurView></BlurView> */}
                <View style={styles.userIcon}>
                  <View style={styles.iconDashboard}><Image source={PostIcon} resizeMode='contain' style={styles.iconDashboardImage}></Image></View>
                  <View style={styles.userIconText}>
                    <Text style={{ color: "#9e8ed3" }}>Owned by</Text>
                    <Text style={{ color: "#FAFAFA" }}>Juniorx</Text>
                  </View>
                </View>
                <View style={styles.value}>
                  <Text style={{ color: "#9e8ed3" }}>Price</Text>
                  <Text style={{ color: "#FAFAFA" }}>1.2 ETH</Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.divider} >
        <View style={styles.div}>
          <View style={styles.divider} >
            <View style={styles.dividerImage}>
              <Image source={PostImage6} resizeMode='cover'  style={styles.imagePost}></Image>
            </View>
            <TouchableOpacity style={styles.buttonPost}>
              <View />
              <TouchableOpacity style={styles.buttonPostInside}>
                {/* <BlurView></BlurView> */}
                <View style={styles.userIcon}>
                  <View style={styles.iconDashboard}><Image source={PostIcon} resizeMode='contain' style={styles.iconDashboardImage}></Image></View>
                  <View style={styles.userIconText}>
                    <Text style={{ color: "#9e8ed3" }}>Owned by</Text>
                    <Text style={{ color: "#FAFAFA" }}>Juniorx</Text>
                  </View>
                </View>
                <View style={styles.value}>
                  <Text style={{ color: "#9e8ed3" }}>Price</Text>
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