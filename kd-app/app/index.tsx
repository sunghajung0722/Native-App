
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { Task } from '@/components/Task';
import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { addTask } from '@/components/Context/TodoContext';
import App from '@/components/App';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF1F2'
    }
})


export default function HomeScreen() {

    return (
        <App />
    )


}



