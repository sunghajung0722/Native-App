
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { Task } from '@/components/Task';
import { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { addTask } from '@/components/Context/TodoContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF1F2'
    }
})


export default function completedTask() {

    const [task, setTask] = useState([]);

    return (
        <SafeAreaView>
            <View>
            </View>
        </SafeAreaView>
    )


}



