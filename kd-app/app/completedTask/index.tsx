

import { StyleSheet } from 'react-native';
import Todo from '../_todo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF1F2'
    }
})


const completedTask = () => {

    const test = 'test';

    return (
        <Todo test={test} />
    );
}

export default completedTask;



