import React, { useState, useEffect } from 'react'
import { Stack } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DBAccessContext from '@/components/DBAccessContext';

export default function rootLayout() {

  console.log("I'm rendering!");

  return (
    <Stack>
      <Stack.Screen name="home" />
      <Stack.Screen name="deets" />
    </Stack>
  )
}