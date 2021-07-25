import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const doIt = () => {
    console.log("Hello from console")
  }
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <text onpress={doIt}> Hello world </text>
      <StatusBar style="auto" /> {/* ตั้งสี status bar ให้ตรงกับสีของแอป */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
