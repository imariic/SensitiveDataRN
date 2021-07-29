import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState(10);
  const [password, setPassword] = useState("");

  const handleNameChange = (name) => {
    setName(name);
  };

  const handleSurnameChange = (surname) => {
    setSurname(surname);
  };

  const handleNicknameChange = (nickname) => {
    setNickname(nickname);
  };

  const handleAgeChange = (age) => {
    setAge(age);
  };

  const handlePasswordChange = (password) => {
    setName(password);
  };

  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        onChangeText={handleSurnameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Nickname"
        onChangeText={handleNicknameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        onChangeText={handleAgeChange}
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
