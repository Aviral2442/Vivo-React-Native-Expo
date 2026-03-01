import { Text, View } from "react-native";

export default function Cart() {
    return (
        <View style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                    Your Cart is Empty
                </Text>
                <Text style={{ fontSize: 18, color: "#666", marginTop: 10 }}>
                    Add some products to your cart.
                </Text>
            </View>
        </View>
    );
};