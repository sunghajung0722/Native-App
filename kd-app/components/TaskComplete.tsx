

import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Image, Text } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { addTask, checkBox } from './Context/TodoContext';
import { UpdateList, getTodoList } from '@/requests/todorequest';


export function TaskComplete() {

    const { task, setTask } = useContext<any>(addTask);
    const { isClick, setClick } = useContext<any>(checkBox);
    const [getTodoApi, setTodoApi] = useState([]);



    useEffect(() => {
        getTodoList().then((data) => {

            setTodoApi(data);
        });
    }, [getTodoList]);



    const onUpdate = (taskId) => {
        const filteredList = getTodoApi.map((_task) => {
            if (_task.id === taskId) {
                if (_task.status === 'pending') {
                    _task.status = 'completed';
                } else {
                    _task.status = 'pending';
                }
                UpdateList(_task.id, _task.task, _task.status);
            }
            return _task;
        })
        setTask(filteredList);
    }



    return (
        <>
            {
                getTodoApi.map((_id, index) => {
                    return (
                        _id.status === 'completed' ?
                            < View style={styles.inputContainer} key={index}>
                                <BouncyCheckbox
                                    key={index}
                                    style={styles.input}
                                    size={20}
                                    fillColor="#FAC600"
                                    unFillColor="#FFFFFF"
                                    text={_id.task}
                                    isChecked={true}
                                    iconStyle={{ borderColor: "red" }}
                                    innerIconStyle={{ borderWidth: 2 }}
                                    textStyle={{
                                        textDecorationLine: "line-through",
                                    }}
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
    //     })
    // }

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