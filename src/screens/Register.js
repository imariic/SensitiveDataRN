import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SensitiveInfoService } from "../services";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const resetInputs = () => {
    setUsername("");
    setPassword("");
  };

  const handleUsernameChange = (username) => {
    setUsername(username);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handlePress = async () => {
    try {
      await SensitiveInfoService.register({ username, password });
      navigation.navigate("Login");
      resetInputs();
    } catch (e) {
      throw e;
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
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

export default Register;
