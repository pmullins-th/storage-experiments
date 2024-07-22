import AsyncStorage from '@react-native-async-storage/async-storage';
import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite';
import { ReactNode, useEffect, useState } from 'react';

interface DBAccessContextProps {
  children: ReactNode
}

export default function DBAccessContext(props : DBAccessContextProps){
  const [username, setUsername] = useState("");
  useEffect(() => {
    console.log("rendering, but from useEffect");
    const getUsername = async () => {
      const storedUsername = await AsyncStorage.getItem("user_name");
      
      if(storedUsername === null)
        return;

      setUsername(storedUsername);
    };
    getUsername();
  }, []);

  const initDb = async (db : SQLiteDatabase) => {
    await db.execAsync("CREATE TABLE IF NOT EXISTS dbentry (title text)");
  };

  return (
    <SQLiteProvider databaseName={`${username}.db`} onInit={initDb}>
      {props.children}
    </SQLiteProvider>
  );
}