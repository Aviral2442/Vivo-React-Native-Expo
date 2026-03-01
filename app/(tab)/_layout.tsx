import { Tabs } from "expo-router";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={18} color={color} /> }} />
            <Tabs.Screen name="product" options={{ title: "Product", tabBarIcon: ({ color, size }) => <FontAwesome name="shopping-bag" size={18} color={color} /> }} />
            <Tabs.Screen name="cart" options={{ title: "Cart", tabBarIcon: ({ color, size }) => <FontAwesome name="shopping-cart" size={18} color={color} /> }} />
            <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={18} color={color} /> }} />
        </Tabs>
    );
};