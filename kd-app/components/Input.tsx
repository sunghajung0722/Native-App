import { addTask } from '@/app/(tabs)';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Image } from 'react-native';



export function Input() {

    const { task, setTask } = useContext(addTask);
    // const [task, setTask] = useState('');
    const [text, setText] = useState('');

    function handleAddNewTask() {
        const newTask = { text };
        setTask([...task, newTask]);
        setText('');
    }
    


    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add Task"
                placeholderTextColor="#B2B2B2"
                returnKeyType="send"
                selectionColor="#666666"
                value={text}
                onChangeText={setText}
                onSubmitEditing={handleAddNewTask}
            />
            <TouchableOpacity
                testID="add-new-task-button"
                activeOpacity={0.7}
                style={styles.addButton}
                onPress={handleAddNewTask}
            >
                <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginTop: -28,
        marginHorizontal: 20,
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