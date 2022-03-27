import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from "react-native"
import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import styles from "./../../styles/profileStyles.scss";
import stylesTopBar from "./../../styles/topBarStyles.scss";

import PostImg from "./../../../assets/img/img01.png";
import IconCheck from "./../../../assets/img/check.png";
import IconProfile from "./../../../assets/img/icon.png";

import PostImg2 from "./../../../assets/img/img02.png";
import PostImg3 from "./../../../assets/img/img03.png";
import PostImg4 from "./../../../assets/img/img04.png";
import PostImg5 from "./../../../assets/img/img05.png";
import PostImg6 from "./../../../assets/img/img06.png";

import IconCard from "./../../../assets/img/iconCard.png";
import IconGrid from "./../../../assets/img/iconGrid.png";

export default function Profile() {

    return (
        <SafeAreaView>
            <View style={styles.div} >

                <ScrollView>
                    <View
                        style={styles.divProfile}
                    >
                        <Image source={PostImg} resizeMode='cover' style={styles.profilePostImage}></Image>
                        <LinearGradient
                            style={styles.divProfileGradient}
                            colors={['rgba(35, 32, 46, 0.1)', 'rgba(35, 32, 46, 1)']}
                            start={{ x: 0, y: 0.39 }}
                            end={{ x: 0, y: 0.84 }}
                        />
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
                            <View style={styles.divFilter}>
                                <TouchableOpacity style={styles.buttonFilter1}><Image source={IconCard} resizeMode='cover' style={styles.imagePostFilter}></Image></TouchableOpacity>
                                <TouchableOpacity style={styles.buttonFilter2}><Image source={IconGrid} resizeMode='cover' style={styles.imagePostFilter}></Image></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.profilePost}>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image source={PostImg2} style={styles.imagePostProfile}>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image source={PostImg3} style={styles.imagePostProfile}>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image source={PostImg} style={styles.imagePostProfile}>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image source={PostImg4} style={styles.imagePostProfile}>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image source={PostImg5} style={styles.imagePostProfile}>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image source={PostImg6} style={styles.imagePostProfile}>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image source={PostImg2} style={styles.imagePostProfile}>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image source={PostImg3} style={styles.imagePostProfile}>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image source={PostImg} style={styles.imagePostProfile}>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image source={PostImg4} style={styles.imagePostProfile}>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image source={PostImg5} style={styles.imagePostProfile}>

                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <View>
                                <View style={"#"}>
                                    <Image source={PostImg6} style={styles.imagePostProfile}>

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
