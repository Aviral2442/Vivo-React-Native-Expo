import { Text, View } from "react-native";

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                    Welcome to Vivo Store
                </Text>
                <Text style={{ fontSize: 18, color: "#666", marginTop: 10 }}>
                    Explore our latest products and offers.
                </Text>
            </View>
        </View>
    );
};