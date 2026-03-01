import { Text, View } from "react-native";

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 20 }}>
                Home Screen
            </Text>
        </View>
    );
};