import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Call from './Screens/Call';
import MainNavigation from './Screens/MainNavigation';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Bottomtab' screenOptions={{
    //       headerShown:false
    //     }}>
    //     <Stack.Screen name='Bottomtab' compoment={MainNavigation}/>
    //     <Stack.Screen name='tab' compoment={Call}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      
    <MainNavigation/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})