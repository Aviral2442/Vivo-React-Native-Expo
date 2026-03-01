import { Text, View } from "react-native";

export default function Product() {
    return (
        <View style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                    Vivo V60e
                </Text>
                <Text style={{ fontSize: 18, color: "#666", marginTop: 10 }}>
                    The new mid-range smartphone from Vivo.
                </Text>
            </View>
        </View>
    );
};