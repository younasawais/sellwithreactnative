import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainApp from './mycode/MainApp';

export default function App() {
  return (
    <View style={styles.container}>
      <MainApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  }
});
