import React from 'react'
import { useRouter } from 'expo-router';
import { View, Text, Pressable } from "react-native";
import DBAccessContext from '@/components/DBAccessContext';
import DBReader from '@/components/DBReader';

export default function home() {
  const router = useRouter();

  return (
    <DBAccessContext>
      <View>
        <DBReader />
        <Pressable onPress={() => router.push("/root/deets")}>
          <Text>go to deets</Text>
        </Pressable>
      </View>
    </DBAccessContext>
  )
}