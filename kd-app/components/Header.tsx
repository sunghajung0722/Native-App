import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



interface HeaderProps {
    tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
    const tasksCounterText = tasksCounter === 1 ? '' : ''

    return (
        <View style={styles.container}>
            <Text style={styles.tasksCounter}></Text>
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
        paddingBottom: 150,
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
        fontFamily: 'Inter-Regular',
    },
    tasksCounterBold: {
        fontSize: 15,
        color: '#FFF',
        fontFamily: 'Inter-Bold',
    }
});