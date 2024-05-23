
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { Task } from '@/components/Task';
import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { addTask } from '@/components/Context/TodoContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF1F2'
  }
})


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
          {task.map((_id, index) => {
            return (
              <View key={index}>
                <Task _id={_id} />
              </View>
            );
          })}
        </ScrollView>


      </View>
    </addTask.Provider>
  );
}



