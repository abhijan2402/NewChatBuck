import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, Pressable, LogBox, Image, ScrollView, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const People = ({ navigation }) => {
  return (
    <View style={styles.MainView}>
      <View style={styles.TopView}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3114/3114883.png" }} style={styles.ImageHead} />
        <Text style={styles.WalletText}>Room</Text>
        <TouchableOpacity style={styles.ImageTopHead} onPress={() => { navigation.navigate('Profile') }}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/236/236831.png" }} style={styles.ImageHead} />
        </TouchableOpacity>
      </View>
      <View style={styles.ImageCameraView}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/45/45010.png" }} style={styles.ImageCamera} />
      </View>
      <View style={styles.RoomView}>
        <Text style={styles.Roomtext}>Room Name</Text>
        <Text style={styles.Roomtext}>Room Description</Text>
      </View>
      <View style={styles.CreateView}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/748/748113.png" }} style={styles.ImgePlus} />
        <Text style={styles.ImgePlusText}>Add Participant</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  MainView: {
    width: windoWidth,
    height: windoHeight,
    backgroundColor: "white"
  },
  ImageHead: {
    width: 30,
    height: 30,
    marginHorizontal: 20
  },
  TopView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    height: windoHeight / 13
  },
  WalletText: {
    // borderWidth: 1,
    width: windoWidth / 1.6,
    textAlign: "center",
    fontSize: 22,
    fontFamily: "800",
    color: "black"
  },
  ImageCamera: {
    width: 100,
    height: 100
  },
  ImageCameraView: {
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: windoHeight / 4
  },
  Roomtext: {
    fontSize: 18,
    fontWeight: "900",
    color: "black",
    marginVertical: 20
  },
  RoomView: {
    marginHorizontal: 30,
    paddingVertical: 20,
    // borderWidth: 1
  },
  ImgePlus: {
    width: 20,
    height: 20,
    marginHorizontal: 10
  },
  CreateView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    // borderWidth: 1,
    marginHorizontal: 30
  },
  ImgePlusText: {
    fontSize: 16,
    color: "black"
  }
});
export default People