import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Register } from "./screens";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.appContainer}>
        <Register />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default App;
