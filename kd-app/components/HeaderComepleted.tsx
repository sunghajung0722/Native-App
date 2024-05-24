import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

export function HeaderCompleted() {


    const [fontsLoaded, fontError] = useFonts({
        'Qilka-Bold': require('../assets/fonts/Qilka-Bold.otf'),
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.imageContainer} >Completed Task</Text>
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
        paddingHorizontal: 25,
        paddingBottom: 5,
        backgroundColor: '#EFF1F2',
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
        fontSize: 40,
        marginTop: 10,
        color: '#FAC600',
        fontFamily: 'Qilka-Bold'
    }
});