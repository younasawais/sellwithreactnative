import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import ViewImageScreen from './screens/ViewImageScreen';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import {colors} from './config.js';

function MainApp(props) {

  return (
    <View style={styles.container}>
      <ListingDetailsScreen 
        src={require('./assets/material2/jacket.jpg')} 
        firstLine='Red Jacket for sale'
        secondLine='$ 199'
        authorPic={require('./assets/material2/mosh.jpg')}
        authorName='Mosh hamedanid'
        totalListings='5 Listings'
        />
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