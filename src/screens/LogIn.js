import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

const LogIn = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    padding: 2,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#DDDDDD",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
});

export default LogIn;
