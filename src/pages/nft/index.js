import React from "react";
import { View, Image, Text, TouchableOpacity, SafeAreaView } from "react-native"
import styles from "./../../styles/nftStyles.scss"

import PostImg from "./../../../assets/img/img01.png";
import PostImg2 from "./../../../assets/img/img02.png";
import PostImg3 from "./../../../assets/img/img03.png";
import PostImg4 from "./../../../assets/img/img04.png";
import PostImg5 from "./../../../assets/img/img05.png";
import PostImg6 from "./../../../assets/img/img06.png";

import IconUser from "./../../../assets/img/icon.png";

export default function NFT({ navigation }) {
    return(
        <>
            <SafeAreaView>
                <View style={styles.div}>
                    <View style={styles.divArtwork}>
                        <Image source={PostImg4} resizeMode='cover' style={styles.nftPostImage}></Image>
                    </View>
                    <View style={styles.divGeneral}>
                        <View>
                            <Text style={styles.titleId}>#2378</Text>
                            <Text style={styles.title}>Buz Sheep</Text>
                        </View>
                    </View>
                    <View style={styles.divOwned}>
                        <View style={styles.divGeneralButton}>
                            <View style={styles.icon}><Image source={IconUser} resizeMode='cover' style={styles.nftPostImageUser}></Image></View>
                            <View >
                                <Text style={styles.titleId}>Owned by</Text>
                                <Text style={styles.subtitleWhite}>Juniorx</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.buttonOutlineSeguir}>
                            <Text style={styles.subtitleBlack}>Seguir</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.divSpace} >
                        <View style={styles.divNft}>
                            <Text style={styles.subtitleWhite}>Ultimos Lances</Text>
                        </View >
                        <View style={styles.divGeneralButtonNft}>
                            <TouchableOpacity style={styles.buttonOutlineNft}>
                                <Text style={styles.subtitleWhite}>1.2ETH</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOutlineNftPurple}>
                                <Text style={styles.subtitleWhite}>Comprar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );    
}