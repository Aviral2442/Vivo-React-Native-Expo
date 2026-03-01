import { Text, View } from "react-native";

export default function Profile() {
    return (
        <View style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                    User Profile
                </Text>
                <Text style={{ fontSize: 18, color: "#666", marginTop: 10 }}>
                    Manage your account and settings.
                </Text>
            </View>
        </View>
    );
};