import { addTask } from '@/app/(tabs)';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export function Task({ task }) {



    return (
        <View style={styles.inputContainer}>
            <BouncyCheckbox
                style={styles.input}
                size={20}
                fillColor="green"
                unFillColor="#FFFFFF"
                text={task.text}
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={(isChecked: boolean) => { console.log(isChecked) }}
            />



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