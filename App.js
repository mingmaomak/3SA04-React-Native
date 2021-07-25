import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-conststants';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
 
const Stack = createStackNavigator();

export default function App() {
  const doIt = () => {
    console.log("Hello from console")
  }
  /* return (
    <View style={styles.container}>
      { <Text>Open up App.js to start working on your app!</Text> }
      { <text onpress={doIt}> Hello world </text> }
      <Weather zipCode = "90110"/>
      <StatusBar style="auto" /> { ตั้งสี status bar ให้ตรงกับสีของแอป }
    </View>
  ); */
  return(
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={ZipCodeScreen} /> 
        <Stack.Screen name="Weather" component={WeatherScreen} /> 
      </Stack.Navigator>  
    </NavigationContainer>        
  ); 
}
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.StatusBarHeight
  },
});
