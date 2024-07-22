import { TextInput,  View, Text, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSQLiteContext } from 'expo-sqlite'
import { DBEntry } from "../model/DBEntry";

export default function DBReader() {
  const db = useSQLiteContext();
  const [writeText, setWriteText] = useState("");
  const [items, setItems] = useState<DBEntry[]>([]);

  const fetch = async () => {
    const data = await db.getAllAsync<any>("SELECT * FROM dbentry");
    setItems(data.map(x => x as DBEntry));
  };

  const write = async (text: string) => {
    await db.execAsync(`INSERT INTO dbentry VALUES ("${text}");`)

    await fetch();
  }

  useEffect(() => {
    const getData = async () => await fetch();
    getData();
  }, []);

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.title}</Text> }
        keyExtractor={item => item.id}
      />
      <TextInput
        value={writeText}
        onChangeText={(text) => setWriteText(text)}
        placeholder="Write some text..."
      />
      <Pressable onPress={() => write(writeText)}>
        <Text>Press Me to Write to DB</Text>
      </Pressable>
    </View>
  );
}