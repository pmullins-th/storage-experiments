import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function login() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const submit = async (username: string) => {
    await AsyncStorage.setItem("user_name", username);
    router.replace("/root/home");
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
      />
      <Pressable onPress={() => submit(username)}>
        <Text>Press Me To Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
