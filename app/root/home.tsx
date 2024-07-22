import React from 'react'
import DBReader from '@/components/DBReader';
import { useRouter } from 'expo-router';
import { View, Text, Pressable } from "react-native";

export default function home() {
  const router = useRouter();

  return (
    <View>
      <Pressable onPress={() => router.push("/root/deets")}>
        <Text>go to deets</Text>
      </Pressable>
    </View>
  )
}