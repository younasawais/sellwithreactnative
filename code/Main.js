import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

function Main(props) {

  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fdd'
  }
});


export default Main;