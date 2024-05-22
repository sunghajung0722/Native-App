import App from '@/components/App';
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { TasksList } from '@/components/Tasklist';
import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Input />
    </View>
  );
}



