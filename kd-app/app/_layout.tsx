import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';


export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: '',
          }}
        />
        <Drawer.Screen
          name="_todo/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'To Do',
            title: '',
          }}
        />
        <Drawer.Screen
          name="completedTask/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Completed Task List',
            title: '',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
