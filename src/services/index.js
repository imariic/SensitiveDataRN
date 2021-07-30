import * as Keychain from "react-native-keychain";

export const register = async (userDetails) => {
  const { username, password } = userDetails;

  await Keychain.setGenericPassword(username, password);
};

export const logIn = async (userDetails) => {
  const { username, password } = userDetails;
  const credentials = await Keychain.getGenericPassword();

  if (credentials.username === username && credentials.password === password) {
    return true;
  }

  return false;
};
