import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Call from './Screens/Call';
import MainNavigation from './Screens/MainNavigation';
import SignIn from './Screens/Auth/SignIn';
import SignUp from './Screens/Auth/SignUp';
import AuthStack from './Screens/AuthStack';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [User, setUser] = useState(false)
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName='Bottomtab' screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='Bottomtab' compoment={SignUp} />
          <Stack.Screen name='tab' compoment={Call} />
        </Stack.Navigator>
      </NavigationContainer> */}

      {

        <NavigationContainer>
          {
            !User ?
              <MainNavigation /> :
              <AuthStack />

          }
        </NavigationContainer>




      }
    </>
  )
}

export default App

const styles = StyleSheet.create({})