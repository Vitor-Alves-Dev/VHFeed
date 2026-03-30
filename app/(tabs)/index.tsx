import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../src/Header';

 export default function App() {
  return(
    <View style={ styles.container}>
      <Header/>
      
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
     flex: 1
  }
})