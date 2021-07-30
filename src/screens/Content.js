import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Content = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN SUCCESSFUL</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "green",
  },
});

export default Content;
