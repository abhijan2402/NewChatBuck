import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, Pressable, LogBox, Image, ScrollView, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react'
import styles from './AuthStyle';
const image = { uri: 'https://i.vimeocdn.com/video/1319858265-1bd4f72cdd495d6d9cd02c041e6ffadb63486e6a3a95131d7c3c1e7e81123a65-d_640x360.jpg' };
function SignIn({ navigation }) {
    const [modalVisible, setModalVisible] = useState(true);
    useEffect(() => {
        setModalVisible(true);
    }, []);
    return (
        <View style={styles.MainView}>
            {/* <ImageBackground source={image} style={styles.BackGImg} > */}
            <View style={styles.LogoView}>
                <Image source={{ uri: "https://chatbuck.com/wp-content/uploads/2023/02/cropped-CHATBUCK-LOGOS-16-150x150.png" }} style={styles.LogoImage} />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <Text style={styles.modalText}>Login</Text>
                        </View>
                        <View style={styles.InputView}>
                            <Text style={styles.TextLabel}>Name</Text>
                            <TextInput placeholder='Email' style={styles.InputText} />
                            <Text style={styles.TextLabel}>Password</Text>
                            <TextInput placeholder='Password' style={styles.InputText} />
                        </View>
                        <TouchableOpacity style={styles.LogInBtn} onPress={() => { navigation.navigate('MainNavigate') }}>
                            <Text style={styles.LogInBtnText}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ForgotPassView} onPress={() => { navigation.navigate('Forgot') }}>
                            <Text style={styles.ForgotPassViewText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* </ImageBackground> */}
        </View>
    )
}
export default SignIn