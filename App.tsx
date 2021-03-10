import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import MainStack from './navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';




export default function App() {
  
  const [loaded, error] = useFonts({ 
    SourceSansProRegular: require('./assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf'),
    SourceSansProSemiBold: require('./assets/fonts/SourceSansPro/SourceSansPro-SemiBold.ttf'),
    SourceSansProBold: require('./assets/fonts/SourceSansPro/SourceSansPro-Bold.ttf'),
  });

  if(loaded) {
    return (
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    );
  }
  else{

    return <ActivityIndicator/>

  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
