import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../config.js';

export default function ButtonComp({title, handlePress, btnColor}){
    const bg = {backgroundColor: btnColor}
    return(
        <TouchableOpacity onPress={handlePress} style={[styles.Touchable,bg]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 22,
        margin: 4
    },
    Touchable : {
        width: '100%',
        borderRadius: 10,
        alignItems: 'center'
    }
});

// build a Button component with round corners. Test this component in App.js.
// - Background color: primary color
// - Path: /components folder
// - add touchable opacity