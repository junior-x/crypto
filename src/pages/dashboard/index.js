import React from "react";
import styles from "./../../styles/dashBoardStyles.scss";
import stylesTopBar from "./../../styles/topBarStyles.scss";
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import PostImage from "./../../../assets/img/img01.png";
import PostImage2 from "./../../../assets/img/img02.png";
import PostImage3 from "./../../../assets/img/img03.png";
import PostImage4 from "./../../../assets/img/img04.png";
import PostImage5 from "./../../../assets/img/img05.png";
import PostImage6 from "./../../../assets/img/img06.png";
import PostIcon from "./../../../assets/img/icon.png";

import DashboardLogo from "./../../../assets/logoWhite.png";

export default function Dashboard({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <StatusBar hidden />
        <View style={styles.div}>
          <View style={stylesTopBar.topBarDashboard}>
            {/* <View style={styles.iconDashboard} /> */}
            <Image source={DashboardLogo} style={styles.iconDashboard} resizeMode='contain'></Image>
            {/* <View style={styles.iconBurger} /> */}
            <TextInput
              style={styles.inputSearch}
              color='white'
              placeholder="Pesquise por categorias, artistas..."
              placeholderTextColor="lightgrey"
            />
          </View>
          <View style={styles.divInput}>
            <View style={styles.searchButtons}>
              <TouchableOpacity style={styles.buttonFilter}><Text style={{ color: "#fff" }} >Todos</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonFilter}><Text style={{ color: "#fff" }} >3D</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonFilter}><Text style={{ color: "#fff" }} >2D</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonFilter}><Text style={{ color: "#fff" }} >GIFs</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonFilter}><Text style={{ color: "#fff" }} >Illustrations</Text></TouchableOpacity>
            </View>
          </View>
          <ScrollView overflow={false}>
            {/* <DashboardPost /> */}
            <View style={styles.divider} >
              <View style={styles.div}>
                <View style={styles.divider} >
                  <View style={styles.dividerImage}>
                    <Image source={PostImage} resizeMode='cover' style={styles.imagePost}></Image>
                  </View>
                  <TouchableOpacity style={styles.buttonPost} onPress={() => navigation.navigate('NFT')}>
                    <View />
                    <TouchableOpacity style={styles.buttonPostInside} onPress={() => navigation.navigate('Profile')}>
                      <View style={styles.userIcon}>
                        <View style={styles.iconDashboard}>
                          <Image source={PostIcon} resizeMode='contain' style={styles.iconDashboardImage}></Image>
                        </View>
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
                    <Image source={PostImage2} resizeMode='cover' style={styles.imagePost}></Image>
                  </View>
                  <TouchableOpacity style={styles.buttonPost} onPress={() => navigation.navigate('NFT')}>
                    <View />
                    <TouchableOpacity style={styles.buttonPostInside} onPress={() => navigation.navigate('Profile')}>
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
                    <Image source={PostImage3} resizeMode='cover' style={styles.imagePost}></Image>
                  </View>
                  <TouchableOpacity style={styles.buttonPost} onPress={() => navigation.navigate('NFT')}>
                    <View />
                    <TouchableOpacity style={styles.buttonPostInside} onPress={() => navigation.navigate('Profile')}>
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
                    <Image source={PostImage4} resizeMode='cover' style={styles.imagePost}></Image>
                  </View>
                  <TouchableOpacity style={styles.buttonPost} onPress={() => navigation.navigate('NFT')}>
                    <View />
                    <TouchableOpacity style={styles.buttonPostInside} onPress={() => navigation.navigate('Profile')}>
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
                    <Image source={PostImage5} resizeMode='cover' style={styles.imagePost}></Image>
                  </View>
                  <TouchableOpacity style={styles.buttonPost} onPress={() => navigation.navigate('NFT')}>
                    <View />
                    <TouchableOpacity style={styles.buttonPostInside} onPress={() => navigation.navigate('Profile')}>
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
                    <Image source={PostImage6} resizeMode='cover' style={styles.imagePost}></Image>
                  </View>
                  <TouchableOpacity style={styles.buttonPost} onPress={() => navigation.navigate('NFT')}>
                    <View />
                    <TouchableOpacity style={styles.buttonPostInside} onPress={() => navigation.navigate('Profile')}>
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

          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}