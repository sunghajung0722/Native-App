

import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Image, Text } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { addTask, checkBox } from './Context/TodoContext';
import { useFonts } from 'expo-font';

export function Task() {

    const { task, setTask } = useContext<any>(addTask);
    const [fontsLoaded, fontError] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    });
    if (!fontsLoaded && !fontError) {
        return null;
    }

    const onUpdate = (taskId) => {
        const filteredList = task.map((_task) => {
            if (_task.id === taskId) {
                // PostList(task)
                if (_task.status === 'pending') {
                    _task.status = 'completed';
                } else {
                    _task.status = 'pending';
                }
            }
            return _task;
        })
        setTask(filteredList);
    }


    return (
        <>
            {
                task.map((_id, index) => {

                    return (
                        _id.status === 'pending' ?
                            < View style={styles.inputContainer} key={index}>
                                <BouncyCheckbox
                                    key={index}
                                    style={styles.input}
                                    size={20}
                                    fillColor="#FAC600"
                                    unFillColor="#FFFFFF"
                                    text={_id.title}
                                    textStyle={{ fontFamily: 'Poppins-Regular' }}
                                    iconStyle={{ borderColor: "red" }}
                                    innerIconStyle={{ borderWidth: 2 }}
                                    onPress={(isChecked: boolean) => { onUpdate(_id.id) }}
                                />
                                {/* <FontAwesomeIcon style={styles.editButton} size={20} icon={faPen} />
                        <FontAwesomeIcon style={styles.deleteButton} size={20} icon={faTrashCan} /> */}
                            </View >
                            :
                            <></>
                    )
                })
            }
        </>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
    },
    input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 20,
        backgroundColor: '',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderRightWidth: 1,
        borderRightColor: '#EFF1F2',
        color: '#EFF1F2',
        fontFamily: 'Poppins-Regular'
    },
    deleteButton: {
        backgroundColor: '#EFF1F2',
        color: '#f44336'
    },
    editButton: {
        backgroundColor: '#EFF1F2',
        color: '#54B4D3',
        marginRight: 13
    }
});