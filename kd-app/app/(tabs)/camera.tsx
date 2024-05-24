
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { Task } from '@/components/Task';
import { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { addTask } from '@/components/Context/TodoContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraView, useCameraPermissions } from 'expo-camera';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});


export default function completedTask() {

    // const [facing, setFacing] = useState('back');

    // function toggleCameraFacing() {
    //     setFacing(current => (current === 'back' ? 'front' : 'back'));
    // }

    return (
        <CameraView style={styles.camera}
            barcodeScannerSettings={{
                barcodeTypes: ["qr"],
            }}
            onBarcodeScanned={(scanningResult) => {
                console.log(scanningResult)
            }}
        >
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} >
                    {/* <Text style={styles.text}>Flip Camera</Text> */}
                </TouchableOpacity>
            </View>
        </CameraView>
    )


}



