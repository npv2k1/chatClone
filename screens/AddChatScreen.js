import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
// import Icon from "react-native-vector-icons/Fontawesome";
import Icon from "react-native-vector-icons/FontAwesome"
import { db } from "../firebase";
const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
    });
  });
  const createChat = async ()=>{
    await db.collection("chats").add({
        chatName:input
    }).then(()=>{
        navigation.goBack();
    }).catch(error=>alert(error))
  }
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name="wechat" type="AntDesign" size={24} color="black" />
        }
      />
      <Button disabled={!input} onPress={createChat} title="Create new chat"/>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding:30,
    height:"100%"
  },
});
