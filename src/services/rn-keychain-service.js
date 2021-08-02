import * as Keychain from "react-native-keychain";

const register = async (userDetails) => {
  const { username, password } = userDetails;

  await Keychain.setGenericPassword(username, password);
};

const logIn = async (userDetails) => {
  const { username, password } = userDetails;
  const credentials = await Keychain.getGenericPassword();

  return credentials.username === username && credentials.password === password;
};

const logOut = async () => {
  await Keychain.resetGenericPassword();
};

const checkIfUserExists = async () => {
  const credentials = await Keychain.getGenericPassword();

  return credentials.username && credentials.password;
};

export default {
  register,
  logIn,
  checkIfUserExists,
  logOut,
};
