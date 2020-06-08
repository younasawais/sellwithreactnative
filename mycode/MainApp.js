import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import ViewImageScreen from './screens/ViewImageScreen';
import {colors} from './config.js'

function MainApp(props) {

  return (
    <View style={styles.container}>
      <ViewImageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: colors.AppBG,
    alignItems: 'center'
    //backgroundColor: '#fdd'
  }
});


export default MainApp;