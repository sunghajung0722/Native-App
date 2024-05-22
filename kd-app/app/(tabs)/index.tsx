import App from '@/components/App';
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { Task } from '@/components/Task';
import { createContext, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3557'
  }
})


export const addTask = createContext();

export default function HomeScreen() {

  const [task, setTask] = useState([]);

  return (
    <addTask.Provider
      value={{
        task,
        setTask,
      }}
    >

      <View style={styles.container}>
        <Header />
        <Input />
        <ScrollView>
          {task.reverse().map((_id, index) => {
            return <Task _id={_id} index={index} />;
          })}
        </ScrollView>


      </View>
    </addTask.Provider>
  );
}



