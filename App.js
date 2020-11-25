import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Platform } from 'react-native';
//SwitchPlatform Sirve para variar el contenido tanto en ios o en android
const switchPlatform = Platform.select({
ios: 'Estoy en IO',
android:'Estoy en Android'
});

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source={require('./assets/logo.png')} 
      style={{width:300,height:80}}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>
        {switchPlatform}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
