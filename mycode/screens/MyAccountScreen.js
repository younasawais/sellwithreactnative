import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {View, Image, StyleSheet, Text} from 'react-native';

function MyAccountScreen(props){
    return(
     <View style={style.container}>
         <View style={style.authorDetails}>
             <View style={style.imgView}>
                <Image source={require('../assets/material2/mosh.jpg')}
                    style={style.img}/>
             </View>
             <View style={style.authorText}>
                 <Text style={style.nameAuthor}>Mosh Hamedani</Text>
                 <Text>programmingwithmosh@gmail.com</Text>
             </View>
         </View>
         <View style={style.options}>
            <View style={{flexDirection: 'row', padding: 10}}>
                <View style={[style.listingIcon, style.iconView]}>
                    <MaterialCommunityIcons name='format-list-bulleted' size={30} color='white'/>
                </View>
                <Text style={style.text}>My Listings</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 10}}>
                <View style={[style.emailIcon, style.iconView]}>
                    <MaterialCommunityIcons name='email' size={30} color='white'/>  
                </View>
                <Text style={style.text}>My Messages</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', padding: 10, backgroundColor:'#fff'}}>
            <View style={[style.logoutIcon, style.iconView]}>  
                <MaterialCommunityIcons name='logout' size={30} color='white'/> 
            </View>
            <Text style={style.text}>Log Out</Text> 
        </View>
     </View>
    )
}

const style = StyleSheet.create({
    container : {
        height: '100%',
        width:  '100%',
        backgroundColor: '#f2f2f2'
    },
    authorDetails : {
        backgroundColor: '#fff',
        flex: 0.2,
        marginTop: 10,
        marginBottom:30,
        flexDirection: 'row',
        padding: 10
    },
    authorText : {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20
    },
    nameAuthor: {
        fontWeight: "bold",
        marginBottom: 5
    },
    imgView : {
        height: 70,
        width : 70,
        borderRadius: 90,
        overflow: 'hidden'
    },
    img : {
        height: 70,
        width : 70
    },
    options : {
        backgroundColor: '#fff',
        flex: 0.4,
        marginBottom:5
    },
    iconView :{
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoutIcon : {
        backgroundColor: '#e6f279'
    },
    listingIcon : {
        backgroundColor: '#f78065',
    },
    emailIcon : {
        backgroundColor: '#32ced9',
    },
    text : {
        alignSelf: 'center',
        marginLeft: 10,
        fontSize: 20
    }
})

export default MyAccountScreen;