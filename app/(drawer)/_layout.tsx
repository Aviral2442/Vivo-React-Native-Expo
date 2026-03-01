import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayoutRoot() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer />
        </GestureHandlerRootView>
    );
};