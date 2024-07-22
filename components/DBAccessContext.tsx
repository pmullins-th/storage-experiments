import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface DBAccessContextProps {
  username: string,
  children: ReactNode
}

export default function DBAccessContext(props : DBAccessContextProps){
  
  const initDb = async (db : SQLiteDatabase) => {
    await db.execAsync("CREATE TABLE IF NOT EXISTS dbentry (title text)");
  };

  return (
    <SQLiteProvider databaseName={`${props.username}.db`} onInit={initDb}>
      {props.children}
    </SQLiteProvider>
  );
}