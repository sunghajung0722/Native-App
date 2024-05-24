
import { HeaderCompleted } from '@/components/HeaderComepleted';
import { Input } from '@/components/Input';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { TaskComplete } from '@/components/TaskComplete';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF1F2'
    },
})


export default function Todo() {


    return (
        <View style={styles.container}>

            <HeaderCompleted />
            <ScrollView>
                <TaskComplete />
            </ScrollView>
        </View>

    );
}



