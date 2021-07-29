import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import { AppNavigator } from "./navigator";

const App = () => {
  return (
    <View style={styles.appContainer}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    height: "100%",
  },
});

export default App;
