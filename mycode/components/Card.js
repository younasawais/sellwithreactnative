import React from 'react';
import { View, Text , StyleSheet, Image} from 'react-native';
import {colors} from '../config.js'

export default function Card({price, description}){
    return(
        <View style={[styles.container, {backgroundColor : colors.cardBg}]}>
            <View style={styles.imgContainer}>
                <Image 
                    source={require("../assets/material2/jacket.jpg")}
                    style={styles.img}
                ></Image>
            </View>
            <View style={styles.description}>
                <Text style={styles.Text}>{description}</Text>
                <Text style={[styles.price, {color: colors.price}]}>{price} $</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 0.4,
        alignItems: 'center'
    },
    imgContainer : {
        width: '90%',
        height: '100%'
    },
    img : {
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    Text : {
        fontSize: 16,
        fontWeight: 'bold'
    },
    price : {
        fontSize: 16,
        fontWeight: 'bold',
        //color: 'yellow'
    },
    description : {
        width: '100%',
        alignItems : "flex-start",
        paddingLeft: 20,
        paddingTop: 5
    }
})