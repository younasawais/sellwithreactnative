import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import ButtonComp from '../components/ButtonComp';
import {colors} from '../config.js';


function WelcomeScreen(props){
    const handleLogin = () => {
       console.log("Login pressed!");
    }
    const handleRegister = () => {
       console.log("Register pressed!");
    }
    return(
        <ImageBackground
            source={require('../assets/material/background.jpg')}    
            style={styles.ImageBackground}>
            <View style={styles.top}>
                <Image 
                    source={require('../assets/material/logo-red.png')}
                    style={styles.img}
                />
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.buttons}>
                    <ButtonComp title="LOGIN" handlePress={handleLogin} btnColor={colors.red}/>
                </View>
                <View style={styles.buttons}>
                    <ButtonComp title="REGISTER" handlePress={handleRegister} btnColor={colors.lightBlue}/>
                </View>
            </View>
        </ImageBackground>
    )    
}

const styles = StyleSheet.create({
    top :{
        flex : 0.85,
        width: '95%',
        alignItems: 'center'
    },
    bottom :{
        flex : 0.15,
        //backgroundColor: 'yellow',
        justifyContent: "flex-end",
        width: '95%',
    },
    ImageBackground : {
        resizeMode:'contain',
        flex: 1,
        alignItems: 'center'
    },
    buttons :{
        marginBottom: 10,
        alignItems: 'center',
        width: '100%'
    },
    img : {
        width:80, 
        height: 80,
        marginTop: 10,
        marginBottom: 5
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});

export default WelcomeScreen;