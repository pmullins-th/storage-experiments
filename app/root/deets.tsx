import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSQLiteContext } from 'expo-sqlite'
import { DBEntry } from '@/model/DBEntry';

export default function deets() {
  const db = useSQLiteContext();
  const [items, setItems] = useState<DBEntry[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await db.getAllAsync<DBEntry>("SELECT * FROM dbentry");
      setItems(data);
    };

    getData;
  }, [])
  return (
    <View>
      <Text>This is the deets page</Text>
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.title}</Text> }
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({})