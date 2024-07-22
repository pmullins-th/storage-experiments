import React, { useState, useEffect } from 'react'
import { Stack } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from "react-native";
import DBAccessContext from '@/components/DBAccessContext';

export default function rootLayout() {
  const [username, setUsername] = useState("");

  console.log("I'm rendering!");

  useEffect(() => {
    const getUsername = async () => {
      const storedUsername = await AsyncStorage.getItem("user_name");
      
      if(storedUsername === null)
        return <View />

      setUsername(storedUsername);
    };
    getUsername();
  }, []);

  return (
    <DBAccessContext username={username}>
      <Stack>
        <Stack.Screen name="home" />
        <Stack.Screen name="deets" />
      </Stack>
    </DBAccessContext>
  )
}