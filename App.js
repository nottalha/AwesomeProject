import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import Home from './src/screen/home';

const App = () => {
  return (
    <View style={{flex: 1, display: 'flex'}}>
   <Home/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_container: {
    backgroundColor: 'aqua',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_container: {
    backgroundColor: 'red',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    backgroundColor: 'aqua',
    fontSize: 30,
  },
  textinput: {
    backgroundColor: 'white',
    width: '60%',
  }
});



export default App;




{
  /*
import React from 'react';
import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
TextInput,
useColorScheme,
View,
} from 'react-native';

import {
Colors
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screen/home';

const Section = ({children, title}) => {
const isDarkMode = useColorScheme() === 'dark';
return (
  <View style={styles.sectionContainer}>
    <Text
      style={[
        styles.sectionTitle,
        {
          color: isDarkMode ? Colors.white : Colors.black,
        },
      ]}>
      {title}
    </Text>
    <Text
      style={[
        styles.sectionDescription,
        {
          color: isDarkMode ? Colors.light : Colors.dark,
        },
      ]}>
      {children}
    </Text>
  </View>
);
};

const App = () => {
return (
  <SafeAreaView>
{/*       
    <View style = {{backgroundColor:'aqua', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>

      <Text style={{fontSize: 24, }}>Hello World </Text>
      <Text>This is First Coding Session of React Native</Text> 
    <Home/>
    {/* </View> 


    {/* <View
      style={{
        backgroundColor: 'grey',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 32, color: 'aqua'}}>
        Meta Verse
        </Text>

    <TextInput style={{backgroundColor: 'white',width: '60%',margin: '2%', borderRadius: 10}} placeholder='Input Your Email Address'>
        </TextInput>
      <TextInput style={{backgroundColor: 'white',width: '60%',margin: '2%', borderRadius: 10}} placeholder='Input Your password'>

        </TextInput>
          */
}
{
  /* </View> */
}

{
  /* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
      </View>
    </ScrollView> 
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
sectionContainer: {
  marginTop: 32,
  paddingHorizontal: 24,
},
sectionTitle: {
  fontSize: 24,
  fontWeight: '600',
},
sectionDescription: {
  marginTop: 8,
  fontSize: 18,
  fontWeight: '400',
},
highlight: {
  fontWeight: '700',
},
});

export default App;
*/
}
