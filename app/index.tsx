import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#4e73df", "#1cc88a"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.card}>
        {loading ? (
          <>
            <ActivityIndicator size="large" color="#4e73df" />
            <Text style={styles.loadingText}>Launching...</Text>
          </>
        ) : (
          <>
            <Text style={styles.title}>
              Hello, brand new world!
            </Text>

            <Text style={styles.subtitle}>
              Vivo V60e
            </Text>

            <Link href="/product/index" style={{ marginTop: 20 }}>
              <Text style={styles.description}>
                Launch Successful 🚀
              </Text>
            </Link>
          </>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#ffffff",
    padding: 35,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    color: "#4e73df",
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    marginTop: 20,
    color: "#777",
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: "#555",
  },
});