import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
//import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';

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
    //backgroundColor: '#fdd'
  }
});


export default MainApp;