import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, Alert, TextInput } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function ChatScreen({ navigation }) {
    const Me = () => {
        console.log("Ia m")
    }
    return (
        <View style={{ width: windowWidth, height: windowHeight, flex: 1 }}>
            <View style={styles.MainView}>
                <TouchableOpacity onPress={() => { navigation.navigate('MainNavigate') }} >
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3114/3114883.png" }} style={styles.UserProfImg1} />
                </TouchableOpacity>

                <Image source={{ uri: "https://img.freepik.com/free-photo/close-up-view-amazing-young-dark-skinned-woman-with-long-brunette-hair-clean-perfect-skin-posing-looking-with-lips-slightly-parted-adjusting-her-hairstyle-horizontal-shot_344912-1039.jpg?w=360" }} style={styles.UserProfImg} />
                <Text style={styles.NameText}>MAdn</Text>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/483/483947.png" }} style={styles.UserProfImg1} />
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/4945/4945907.png" }} style={styles.UserProfImg1} />
            </View>
            <KeyboardAvoidingView
                // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
                <View style={styles.ChatShowView}>
                    <View style={styles.MainchatView}>
                        <Text style={styles.ChatText}>I am the chat</Text>
                        <Text style={styles.ChatTime}>5:49pm</Text>
                    </View>
                    <View style={styles.MainchatView}>
                        <Text style={styles.ChatText}>Hi</Text>
                        <Text style={styles.ChatTime}>5:49pm</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <View style={styles.InputBox}>
                <View style={styles.MsgBox}>
                    <TextInput placeholder='Enter the message' style={styles.TextInputBox} />
                    <TouchableOpacity>

                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/4024/4024582.png" }} style={styles.UserProfImg1} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    UserProfImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
        marginLeft: 1
    },
    UserProfImg1: {
        width: 30,
        height: 30,
        // borderRadius: 20,
        marginHorizontal: 5
    },
    MainView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        height: windowHeight / 11,
        backgroundColor: "white"
    },
    NameText: {
        fontSize: 20,
        fontWeight: "800",
        color: "black",
        // borderWidth: 1,
        width: windowWidth / 2.1
    },
    ChatShowView: {
        // borderWidth: 1,
        height: windowHeight / 1.22,
        backgroundColor: "white"
    },
    MainchatView: {
        // borderWidth: 1,
        borderRadius: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: windowWidth / 3,
        alignSelf: "flex-end",
        margin: 6,
        backgroundColor: "#1081AF",
        marginVertical: 4
    },
    ChatText: {
        fontSize: 17,
        color: "white",
        fontWeight: "700"
    },
    ChatTime: {
        color: "lightgrey",
        fontSize: 10
    },
    InputBox: {
        // position: "absolute",
        // borderWidth: 1,
        flex: 1,
        width: windowWidth,
        backgroundColor: "white",
        // bottom: 0,
        // height: windowHeight / 11
        // zIndex: 10
    }
    , MsgBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 10
    },
    TextInputBox: {
        // borderWidth: 1,
        width: windowWidth / 1.25
    },
    container: {
        flex: 8,
    },
})
export default ChatScreen