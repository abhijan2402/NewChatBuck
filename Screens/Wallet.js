import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, Pressable, LogBox, Image, ScrollView, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const Wallet = ({ navigation }) => {
  return (
    <View style={styles.MainView}>
      <View style={styles.TopView}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3114/3114883.png" }} style={styles.ImageHead} />
        <Text style={styles.WalletText}>Wallet</Text>
        <TouchableOpacity style={styles.ImageTopHead} onPress={() => { navigation.navigate('Profile') }}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/236/236831.png" }} style={styles.ImageHead} />
        </TouchableOpacity>
      </View>
      <View style={styles.WalletAmount}>
        {/* <Text>hi</Text> */}
      </View>
      <View style={styles.BtnView}>
        <TouchableOpacity style={styles.Btns}>
          <Text style={styles.TextBtn}>Request</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btns}>
          <Text style={styles.TextBtn}>Send</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.WallView}>
        <Image source={{ uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" }} style={styles.ImageMan} />
        <Text style={styles.WallViewText}>Sebriaqn</Text>
        <Text style={styles.WallViewText}>$149</Text>
      </View>
    </View>
  )
}

export default Wallet

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
  WalletAmount: {
    height: windoHeight / 3.5,
    // borderWidth: 1
  },
  BtnView: {
    // borderWidth: 1,
    // height: windoHeight / 7,
    justifyContent: "center",
    display: "flex",
    flexDirection: "row"
  },
  Btns: {
    // borderWidth: 1,
    backgroundColor: "#1081AF",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginHorizontal: 20,
    width: windoWidth / 3

  },
  TextBtn: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  ImageMan: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 20
  },
  WallView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    paddingHorizontal: 20,
    marginVertical: 20
  },
  WallViewText: {
    fontSize: 18,
    color: "black",
    fontWeight: "900",
    marginHorizontal: 10,
    width: windoWidth / 2
  }
})