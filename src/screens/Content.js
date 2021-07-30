import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SensitiveInfoService } from "../services";

const Content = ({ setIfUserExists }) => {
  const onHandleLogOut = () => {
    SensitiveInfoService.logOut();
    setIfUserExists(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN SUCCESSFUL</Text>
      <TouchableOpacity style={styles.button} onPress={onHandleLogOut}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default Content;
