import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { logIn } from "../services";

const LogIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (username) => {
    setUsername(username);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleLogIn = async () => {
    try {
      const isLoggedIn = await logIn({ username, password });
      if (isLoggedIn) {
        navigation.navigate("Content");
      }
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
      <TouchableOpacity style={styles.button} onPress={handleLogIn}>
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
