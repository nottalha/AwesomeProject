import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import Grid from '../component/grid';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          translucent={true}
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        <Grid/>
        {/* <Text style={styles.nameText}>My name</Text> */}
     
        {/* <View style={styles.imageContainer}> */}
          {/* <Text>WHite</Text>  */}
          {/* <Image 
          style = {styles.image}
          source={require('../assets/margot.jpg')} /> */}
          {/* <Image source={require('C:/Users/Talha/Downloads/margot.jpg')} /> */}
          
        {/* </View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#473241',
    height: '100%',
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
    paddingTop: 100,
    // padding: '10%',
  },
  text: {
    marginTop: '5%',
    color: 'blue',
  },
  nameText: {
    // translucent: true,
    color: 'white',
    fontSize: 25,
  },
  imageContainer: {
      backgroundColor: 'white',
      marginTop: 10,
      width: '80%',
      height: '40%',
      borderRadius: 10,
  },
  image: { 
    // marginTop: 10,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  }
});
