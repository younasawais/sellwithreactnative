import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {colors} from '../config.js';

function ListingDetailsScreen({src, firstLine, secondLine, authorPic, authorName, totalListings}) {
    return(
        <View style={styles.container}>
            <Image  source={src}
                    style={styles.img}>
            </Image>
            <View style={styles.description}>
                <Text style={styles.Text}>{firstLine}</Text>
                <Text style={[styles.secondLineText, {color: colors.price}]}>{secondLine}</Text>
            </View>
            <View style={styles.authorDetails}>
                <Image  source={authorPic}
                        style={styles.profilePic}>
                </Image>
                <View style={styles.authorTexts}>
                    <Text style={styles.author}>{authorName}</Text>
                    <Text style={[styles.totalListings, {color: colors.price}]}>{totalListings}</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 0.4,
        width: '100%'
    },
    img:{
        width: '100%',
        height: '100%',
        marginRight: 10
    },
    description : {
        width: '100%',
        alignItems : "flex-start",
        paddingLeft: 20
    },
    Text : {
        fontSize: 24,
        marginBottom: 5
    },
    secondLineText : {
        fontSize: 22
    },
    authorDetails:{
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 20
    },
    authorTexts : {
    },
    profilePic: {
        width: 70,
        height: 70,
        borderRadius: 40,
        marginRight: 10
    },
    author: {
        marginVertical: 5,
        fontSize: 16
    },
    totalListings: {
        fontSize: 16
    }
})

export default ListingDetailsScreen;