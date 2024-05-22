import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import logoImg from '../assets/images/react-logo.png';



export function Header() {


    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text source={logoImg} style={styles.imageContainer} >TODO</Text>
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
        paddingBottom: 75,
        backgroundColor: '#1D3557',
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
        fontSize: 45,
        marginTop: 60,
        color: 'white',
        fontWeight: 'bold'
    }
});