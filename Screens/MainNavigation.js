import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Call from '../Screens/Call';
import Chat from '../Screens/Chat';
import People from '../Screens/People';
import Wallet from '../Screens/Wallet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();


const MainNavigation = () => {
  return (
  <Tab.Navigator
  screenOptions={{
    headerShown:false,
   
    tabBarShowLabel: false,
    showIcon: false,

        tabBarStyle:[ {
          position:"absolute",
          elevation:0,
          backgroundColor:"#ffffff",
          height:70,
          ...styles.shadow
        },],
        activeTintColor: 'pink',
      }}>

        <Tab.Screen name="Chat" component={Chat} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
              <Ionicons name='chatbubbles-sharp'  color={focused ? '#047BD5' : 'black'} size={22}/>
            <Text style={{color:focused ? '#047BD5' : 'black',fontFamily:"SourceSansPro-Regular"}}>Chats</Text>
          </View>
        )
      }}/>

       <Tab.Screen name="Wallet" component={Wallet} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
              <Ionicons name='wallet'  color={focused ? '#047BD5' : 'black'} size={22}/>
            <Text style={{color:focused ? '#047BD5' : 'black',fontFamily:"SourceSansPro-Regular"}}>Wallet</Text>
          </View>
        )
      }}/>

        <Tab.Screen name="People" component={People} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
              <Ionicons name='people'  color={focused ? '#047BD5' : 'black'} size={22}/>
            <Text style={{color:focused ? '#047BD5' : 'black',fontFamily:"SourceSansPro-Regular"}}>People</Text>
          </View>
        )
      }}/>
       
       <Tab.Screen name="Call" component={Call} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
              <Ionicons name='ios-call'  color={focused ? '#047BD5' : 'black'} size={22}/>
            <Text style={{color:focused ? '#047BD5' : 'black',fontFamily:"SourceSansPro-Regular"}}>Call</Text>
          </View>
        )
      }}/>

  </Tab.Navigator>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})