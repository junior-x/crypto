import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    ScrollView, 
    SafeAreaView } from "react-native"
import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import styles from "./../../styles/profileStyles.scss";
import stylesTopBar from "./../../styles/topBarStyles.scss";

import PostImg from "./../../../assets/img/img01.png";
import IconCheck from "./../../../assets/img/check.png";
import IconProfile from "./../../../assets/img/icon.png";

export default function Profile() {

    return (
        <SafeAreaView>
            <View style={styles.div} >
                <LinearGradient 
                    style={styles.divProfile} 
                    colors={['#1a1626', 'rgba(35, 32, 46, 1)']}
                    start={{ x: 0, y: 0.60 }}
                    end={{ x: 0, y: 0.81 }}
                >
                <Image source={PostImg} resizeMode='cover' style={styles.profilePostImage}></Image>
                    <View style={stylesTopBar.topBarAbsolute}>
                        <View style={stylesTopBar.iconDashboard} />
                        <View style={stylesTopBar.iconBurger} />
                    </View>
                    <View style={styles.divProfileItems}>
                        <TouchableOpacity style={styles.icon}>
                            <Image source={IconProfile} style={styles.iconProfile} resizeMode='cover'></Image>
                            {/* <View style={styles.iconCheck}></View> */}
                            <Image source={IconCheck} style={styles.iconCheck}></Image>
                        </TouchableOpacity>
                        <Text style={styles.title}>Juniorx</Text>
                        <Text style={styles.subtitle}>@drift3rx</Text>
                    </View>
                    <View style={styles.divFilter}>
                        <TouchableOpacity style={styles.buttonFilter1}></TouchableOpacity>
                        <TouchableOpacity style={styles.buttonFilter2}></TouchableOpacity>
                    </View>
                </LinearGradient>
                <ScrollView>
                    <View style={styles.profilePost}>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
