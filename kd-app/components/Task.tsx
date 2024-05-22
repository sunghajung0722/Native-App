import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';

interface Task {
    addTask: (task: string) => void;
}

export function Task({ addTask }: Task) {
    const [task, setTask] = useState('');

    function handleAddNewTask() {
        if (!task) {
            return;
        }
        addTask(task);
        setTask('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Sample 1"
                placeholderTextColor="#B2B2B2"
                returnKeyType="send"
                selectionColor="#666666"
                value={task}
                onChangeText={setTask}
                onSubmitEditing={handleAddNewTask}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 56,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightWidth: 1,
        borderRightColor: '#EBEBEB',
        color: '#666666'
    },
    addButton: {
        backgroundColor: '#FFF',
        height: 56,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
});