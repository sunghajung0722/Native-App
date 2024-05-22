import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';



interface HeaderProps {
    tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
    const tasksCounterText = tasksCounter === 1 ? '' : ''

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.imageContainer} ></Text>
            </TouchableOpacity>
            <View style={styles.tasks}>
                <Text style={styles.tasksCounter}></Text>
                <Text style={styles.tasksCounterBold}></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 24,
        paddingBottom: 120,
        backgroundColor: '#57606a',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    tasks: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    tasksCounter: {
        fontSize: 15,
        color: '#FFF',
    },
    tasksCounterBold: {
        fontSize: 15,
        color: '#FFF',
    },
    imageContainer: {
        marginTop: 60,
        fontFamily: 'Roboto-Bold'
    }
});