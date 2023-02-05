import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, Pressable, LogBox, Image, ScrollView, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import React, { useEffect, useState } from 'react'
const Chat = () => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(true);
  }, []);

  return (
    <View style={styles.MainView}>
      <Text>hi</Text>
    </View>
  )
}
export default Chat
const styles = StyleSheet.create({

})