import * as Keychain from "react-native-keychain";

const register = async (userDetails) => {
  const { name, surname, nickname, age, password } = userDetails;

  await Keychain.setGenericPassword(name, password);
};
