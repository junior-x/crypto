import React from "react";
import { View, Image, Text, TouchableOpacity, SafeAreaView } from "react-native"
import styles from "./../../styles/nftStyles.scss"

export default function NFT() {
    return(
        <>
            <SafeAreaView>
                <View style={styles.div}>
                    <View style={styles.divArtwork}>
                        
                    </View>
                    <View style={styles.divGeneral}>
                        <View>
                            <Text style={styles.titleId}>#2378</Text>
                            <Text style={styles.title}>Buz Sheep</Text>
                        </View>
                    </View>
                    <View style={styles.divOwned}>
                        <View style={styles.divMargin}>
                            <View style={styles.icon}></View>
                            <Text>Owned by</Text>
                            <Text>Buz Sheep</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonOutline}>
                            <Text style={styles.subtitle}>Seguir</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <View style={styles.divGeneral}>
                            <Text style={styles.subtitleWhite}>Ultimos Lances</Text>
                        </View >
                        <View style={styles.divGeneral}>
                            <TouchableOpacity style={styles.buttonOutline}>
                                <Text>1.2ETH</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOutline}>
                                <Text>Comprar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );    
}