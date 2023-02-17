import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Call from './Screens/Call';
import MainNavigation from './Screens/MainNavigation';
import SignIn from './Screens/Auth/SignIn';
import SignUp from './Screens/Auth/SignUp';
// import AuthStack from './Screens/AuthStack';
import ForgotPassword from './Screens/Auth/ForgotPassword';
import Chat from './Screens/Chat';
import Profile from './Screens/Profile';
import ChatScreen from './Screens/ChatScreen';

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
          <Stack.Navigator initialRouteName='SignUp' screenOptions={{
            headerShown: false
          }}>
            {/* <> */}
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Forgot" component={ForgotPassword} />
            <Stack.Screen name="MainNavigate" component={MainNavigation} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            {/* </> */}

          </Stack.Navigator>
        </NavigationContainer>




      }
    </>
  )
}

export default App

const styles = StyleSheet.create({})