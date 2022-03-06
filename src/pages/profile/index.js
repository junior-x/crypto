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
import stylesTopBar from "./../../styles/topBarStyles.scss"
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
                    <View style={stylesTopBar.topBar}>
                        <View style={stylesTopBar.iconDashboard} />
                        <View style={stylesTopBar.iconBurger} />
                    </View>
                    <View style={styles.divProfileItems}>
                        <TouchableOpacity style={styles.icon}>
                            <View style={styles.iconCheck}></View>
                        </TouchableOpacity>
                        <Text style={styles.title}>Juniorx</Text>
                        <Text style={styles.subtitle}>@drift3rx</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={"#"}></TouchableOpacity>
                        <TouchableOpacity style={"#"}></TouchableOpacity>
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
