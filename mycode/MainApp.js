import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
//import ViewImageScreen      from './screens/ViewImageScreen';
//import ListingDetailsScreen from './screens/ListingDetailsScreen';
import MyAccountScreen      from './screens/MyAccountScreen';
import {colors}             from './config.js';

function MainApp(props) {
  return (
    <View style={styles.container}>
      <MyAccountScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: colors.AppBG,
    alignItems: 'center'
  }
});


export default MainApp;