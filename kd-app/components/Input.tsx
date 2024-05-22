import { addTask } from '@/app/(tabs)';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Image, Button } from 'react-native';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export function Input() {

    const { task, setTask } = useContext(addTask);
    // const [task, setTask] = useState('');
    const [text, setText] = useState('');

    function handleAddNewTask() {

        if (!text) {
            return Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Input Task is Required!',
                button: 'close',
            })

        }

        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Task Added!',
            button: 'close',
        })

        const newTask = { id: task.length + 1, title: text };
        setTask([...task, newTask]);
        setText('');


    }



    return (
        <View >
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
                    <AlertNotificationRoot>
                        <AntDesign name="plus" style={{ marginTop: 15 }} size={24} color="black" />
                    </AlertNotificationRoot>
                </TouchableOpacity>
            </View>
        </View >
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
        marginBottom: 1,
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