

import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useContext } from 'react';
import { StyleSheet, TextInput, View, Image, Text } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { addTask } from './Context/TodoContext';


export function Task() {

    const { task, setTask } = useContext<any>(addTask);

    return (
        <>
            {
                task.map((_id, index) => {
                    return (
                        < View style={styles.inputContainer} >
                            <BouncyCheckbox
                                style={styles.input}
                                size={20}
                                fillColor="#FAC600"
                                unFillColor="#FFFFFF"
                                text={_id.title}
                                iconStyle={{ borderColor: "red" }}
                                innerIconStyle={{ borderWidth: 2 }}
                            />
                            <FontAwesomeIcon style={styles.editButton} size={20} icon={faPen} />
                            <FontAwesomeIcon style={styles.deleteButton} size={20} icon={faTrashCan} />
                        </View >
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
        backgroundColor: '#EFF1F2',
        borderRadius: 5,
        marginLeft: 5,
        marginTop: 20,
        marginHorizontal: 35,
        flexDirection: 'row',
        alignItems: 'center',

    },
    input: {
        flex: 1,
        height: 30,
        paddingHorizontal: 20,
        backgroundColor: '',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderRightWidth: 1,
        borderRightColor: '#EFF1F2',
        color: '#EFF1F2'
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