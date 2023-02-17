import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, Pressable, LogBox, Image, ScrollView, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const Call = ({ navigation }) => {
  return (
    <View style={styles.MainView}>
      <View style={styles.MainViewTop}>
        <Text style={styles.ChatBucktext}>Calls</Text>
        <View style={styles.ImageTopHead}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/149/149852.png" }} style={[styles.ImageHead, { width: 27, height: 27, alignItems: "center", alignSelf: "center" }]} />
        </View>
        <TouchableOpacity style={styles.ImageTopHead} onPress={() => { navigation.navigate('Profile') }}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/236/236831.png" }} style={styles.ImageHead} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.ChatView}>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" }} style={styles.UserProfImg} />
          <View style={styles.CallWidth}>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/483/483947.png" }} style={styles.Calls} />
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" }} style={styles.UserProfImg} />
          <View style={styles.CallWidth}>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/483/483947.png" }} style={styles.Calls} />
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" }} style={styles.UserProfImg} />
          <View style={styles.CallWidth}>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/483/483947.png" }} style={styles.Calls} />
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" }} style={styles.UserProfImg} />
          <View style={styles.CallWidth}>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/483/483947.png" }} style={styles.Calls} />
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" }} style={styles.UserProfImg} />
          <View style={styles.CallWidth}>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/483/483947.png" }} style={styles.Calls} />
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" }} style={styles.UserProfImg} />
          <View style={styles.CallWidth}>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/483/483947.png" }} style={styles.Calls} />
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" }} style={styles.UserProfImg} />
          <View style={styles.CallWidth}>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/483/483947.png" }} style={styles.Calls} />
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" }} style={styles.UserProfImg} />
          <View style={styles.CallWidth}>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/483/483947.png" }} style={styles.Calls} />
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" }} style={styles.UserProfImg} />
          <View style={styles.CallWidth}>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/483/483947.png" }} style={styles.Calls} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Call
const styles = StyleSheet.create({
  MainView: {
    height: windoHeight,
    backgroundColor: "#1081AF"
  },
  MainViewTop: {
    // borderWidth: 1,
    height: windoHeight / 6,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10
    // justifyContent: "center",
    // alignItems: "center"
  },
  ImageHead: {
    width: 30,
    height: 30
  },
  ChatBucktext: {
    fontSize: 25,
    fontWeight: "800",
    color: "white",
    // borderWidth: 1,
    width: windoWidth / 1.4,
    paddingHorizontal: 20
  },
  ImageTopHead: {
    // borderWidth: 1,
    marginHorizontal: 10
  },


  ChatView: {
    // borderWidth: 1,
    backgroundColor: "white",
    paddingTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30
  },
  UserProCol: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    // borderWidth: 1,
    marginVertical: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: "#cacccf",
    paddingVertical: 5,
    marginHorizontal: 10
  },
  UserProfImg: {
    width: 50,
    height: 50,
    alignItems: "center",
    marginRight: 10,
    borderRadius: 25
  },
  UserName: {
    fontWeight: "700",
    color: "black",
    fontSize: 18
  },
  UserStatus: {
    color: "grey",
  },
  Calls: {
    width: 25,
    height: 25,
    alignItems: "center",
    alignSelf: "center"
  },
  CallWidth: {
    width: windoWidth / 1.6,
    // borderWidth: 1
  }

})