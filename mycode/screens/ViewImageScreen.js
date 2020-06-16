import React from 'react';
import Card from '../components/Card';
import {View, Image, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


function ViewImageScreen({src}){
    return(
        <View style={style.constainer}>
            <View style={style.top}>      
                <AntDesign name="close" size={30} color="white" />    
                <View style={style.fill}></View>   
                <AntDesign name="delete" size={30} color="white" />
            </View>
            <Image
                source={src}
                style={style.img}
            ></Image>
        </View>
    )
}

const style = StyleSheet.create({
    constainer : {
        width: '100%',
        height:'100%',
        backgroundColor: '#000'
    },
    img:{
        width:'100%',
        height: '80%'
    },
    fill : {
        flex: 1,
        height:30,
        //backgroundColor: 'red'
    },
    top : {
        flexDirection: 'row',
        flex: 0.8,
        paddingTop: 20
    }
})

export default ViewImageScreen;