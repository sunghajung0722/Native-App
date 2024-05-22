import App from '@/components/App';
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { Task } from '@/components/Task';
import { TasksList } from '@/components/Tasklist';
import { createContext, useState } from 'react';

import { StyleSheet, View } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})

export const addTask = createContext();

export default function HomeScreen() {

  const [task, setTask] = useState([]);

  const testarray = [1, 2, 3, 4];


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
        {task.map((_task) => {
          return <Task  task={_task}/>;
        })}

      </View>
    </addTask.Provider>
  );
}



