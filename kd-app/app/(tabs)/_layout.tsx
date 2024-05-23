import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { useState } from 'react';
import { addTask } from '@/components/Context/TodoContext';

export default function Layout() {

    const [task, setTask] = useState([]);


    return (
        <addTask.Provider
            value={{
                task,
                setTask,
            }}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer>
                    <Drawer.Screen
                        name="index" // This is the name of the page and must match the url from root
                        options={{
                            drawerLabel: 'Home',
                            title: '',
                        }}
                    />
                    <Drawer.Screen
                        name="todo" // This is the name of the page and must match the url from root
                        options={{
                            drawerLabel: 'To Do List',
                            title: '',
                        }}
                    />
                    <Drawer.Screen
                        name="completedtask" // This is the name of the page and must match the url from root
                        options={{
                            drawerLabel: 'Completed Task List',
                            title: '',
                        }}
                    />
                </Drawer>
            </GestureHandlerRootView>
        </addTask.Provider>


    );
}
