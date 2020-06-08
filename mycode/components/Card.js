import React from 'react';
import { View, Text , StyleSheet, Image} from 'react-native';
import {colors} from '../config.js'

export default function Card({secondLineText, description, src}){
    return(
        <View style={[styles.container]}>
            <Image 
                source={src}
                style={styles.img}
            ></Image>
            <View style={styles.description}>
                <Text style={styles.Text}>{description}</Text>
                <Text style={[styles.price, {color: colors.price}]}>{secondLineText}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 0.4,
        width: '90%',
        alignItems: 'center',
        paddingBottom : 50,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    description : {
        width: '100%',
        alignItems : "flex-start",
        paddingLeft: 20
    },
    img : {
        width: '100%',
        height: '100%'
    },
    Text : {
        fontSize: 16,
        fontWeight: 'bold'
    },
    price : {
        fontSize: 16,
        fontWeight: 'bold'
    }
})
// ---------------------------- Dix OLD ------------------------------------
// <View style={[styles.container, {backgroundColor : colors.cardBg}]}>
// <View style={styles.imgContainer}>
//     <Image 
//         source={require("../assets/material2/jacket.jpg")}
//         style={styles.img}
//     ></Image>
// </View>
// <View style={styles.description}>
//     <Text style={styles.Text}>{description}</Text>
//     <Text style={[styles.price, {color: colors.price}]}>{price} $</Text>
// </View>
// </View>