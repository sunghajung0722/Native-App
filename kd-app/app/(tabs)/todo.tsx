
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { Task } from '@/components/Task';
import { StyleSheet, View, ScrollView } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF1F2'
    }
})


export default function Todo() {



    return (
        <View style={styles.container}>

            <Header />
            <Input />
            <ScrollView>
                <Task />
            </ScrollView>
        </View>

    );
}



