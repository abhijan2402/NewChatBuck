import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, Pressable, LogBox, Image, ScrollView, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import React, { useEffect, useState } from 'react'
const Chat = ({ navigation }) => {
  return (
    <View style={styles.MainView}>
      <View style={styles.MainViewTop}>
        <Text style={styles.ChatBucktext}>ChatBuck</Text>
        <View style={styles.ImageTopHead}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/149/149852.png" }} style={[styles.ImageHead, { width: 27, height: 27, alignItems: "center", alignSelf: "center" }]} />
        </View>
        <TouchableOpacity style={styles.ImageTopHead} onPress={() => { navigation.navigate('Profile') }}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/236/236831.png" }} style={styles.ImageHead} />
        </TouchableOpacity>
      </View>
      <View style={styles.MidView}>
        <View style={styles.MidViewStatus}>
          <Text style={styles.MidViewStatusText}>Status</Text>
        </View>
        <ScrollView horizontal={true} style={{ marginHorizontal: 20, }}>
          <View style={styles.ScrollView}>
            <Image source={{ uri: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" }} style={styles.StatusView} />
            <Text style={styles.StatusText}>Sebastian</Text>
          </View>
          <View style={styles.ScrollView}>
            <Image source={{ uri: "https://c8.alamy.com/comp/ENG5YR/close-up-of-face-of-mixed-race-woman-ENG5YR.jpg" }} style={styles.StatusView} />
            <Text style={styles.StatusText}>Sebastian</Text>
          </View>
          <View style={styles.ScrollView}>
            <Image source={{ uri: "https://api.time.com/wp-content/uploads/2014/03/happily-surprised.jpg" }} style={styles.StatusView} />
            <Text style={styles.StatusText}>Sebastian</Text>
          </View>
          <View style={styles.ScrollView}>
            <Image source={{ uri: "https://t4.ftcdn.net/jpg/02/32/98/33/360_F_232983351_z5CAl79bHkm6eMPSoG7FggQfsJLxiZjY.jpg" }} style={styles.StatusView} />
            <Text style={styles.StatusText}>Sebastian</Text>
          </View>
          <View style={styles.ScrollView}>
            <Image source={{ uri: "https://c8.alamy.com/comp/ENG5YR/close-up-of-face-of-mixed-race-woman-ENG5YR.jpg" }} style={styles.StatusView} />
            <Text style={styles.StatusText}>Sebastian</Text>
          </View>
          <View style={styles.ScrollView}>
            <Image source={{ uri: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" }} style={styles.StatusView} />
            <Text style={styles.StatusText}>Sebastian</Text>
          </View>
        </ScrollView>
      </View>
      <ScrollView style={styles.ChatView}>
        <TouchableOpacity style={styles.UserProCol} onPress={() => { navigation.navigate('ChatScreen') }} >
          <Image source={{ uri: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" }} style={styles.UserProfImg} />
          <View>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4_aEmBmAKJKQso7GX85CFptfmKmPqgWKWjFDF8Y&s" }} style={styles.UserProfImg} />
          <View>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" }} style={styles.UserProfImg} />
          <View>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4_aEmBmAKJKQso7GX85CFptfmKmPqgWKWjFDF8Y&s" }} style={styles.UserProfImg} />
          <View>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://img.freepik.com/free-photo/close-up-view-amazing-young-dark-skinned-woman-with-long-brunette-hair-clean-perfect-skin-posing-looking-with-lips-slightly-parted-adjusting-her-hairstyle-horizontal-shot_344912-1039.jpg?w=360" }} style={styles.UserProfImg} />
          <View>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4_aEmBmAKJKQso7GX85CFptfmKmPqgWKWjFDF8Y&s" }} style={styles.UserProfImg} />
          <View>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://img.freepik.com/free-photo/close-up-view-amazing-young-dark-skinned-woman-with-long-brunette-hair-clean-perfect-skin-posing-looking-with-lips-slightly-parted-adjusting-her-hairstyle-horizontal-shot_344912-1039.jpg?w=360" }} style={styles.UserProfImg} />
          <View>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://img.freepik.com/free-photo/close-up-view-amazing-young-dark-skinned-woman-with-long-brunette-hair-clean-perfect-skin-posing-looking-with-lips-slightly-parted-adjusting-her-hairstyle-horizontal-shot_344912-1039.jpg?w=360" }} style={styles.UserProfImg} />
          <View>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
        </View>
        <View style={styles.UserProCol}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4_aEmBmAKJKQso7GX85CFptfmKmPqgWKWjFDF8Y&s" }} style={styles.UserProfImg} />
          <View>
            <Text style={styles.UserName}>Secbj</Text>
            <Text style={styles.UserStatus}>hey i am using the chatbuck</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
export default Chat
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
  MidView: {
    backgroundColor: "white",
    height: windoHeight / 5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  MidViewStatus: {
    // borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  MidViewStatusText: {
    fontSize: 15,
    fontWeight: "700",
    color: "black"
  },
  StatusView: {
    width: 60,
    height: 60,
    alignItems: "center",
    borderRadius: 30
  },
  ScrollView: {
    // borderWidth: 1,
    width: windoWidth / 5,
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 20,
    height: windoHeight / 7
  },
  StatusText: {
    fontSize: 13,
    color: "black",
    marginVertical: 5
  },
  ChatView: {
    // borderWidth: 1,
    backgroundColor: "white",
    paddingTop: 20
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
  }

})