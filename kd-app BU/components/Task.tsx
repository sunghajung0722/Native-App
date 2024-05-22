import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
            <BouncyCheckbox
                style={styles.input}
                size={20}
                fillColor="green"
                unFillColor="#FFFFFF"
                text="Sample 1"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={(isChecked: boolean) => { console.log(isChecked) }}
            />

            {/* <TextInput
                style={styles.input}
                placeholder="Sample 1"
                placeholderTextColor="#B2B2B2"
                returnKeyType="send"
                selectionColor="#666666"
                value={task}
                onChangeText={setTask}
                onSubmitEditing={handleAddNewTask}
            /> */}

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginLeft: 20,
        marginTop: 20,
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
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderRightWidth: 1,
        borderRightColor: '#EBEBEB',
        color: '#666666'
    },
});