import * as Keychain from "react-native-keychain";

const register = async (userDetails) => {
  const { username, password } = userDetails;

  await Keychain.setGenericPassword(username, password);
};

const logIn = async (userDetails) => {
  const { username, password } = userDetails;
  const credentials = await Keychain.getGenericPassword();

  if (credentials.username === username && credentials.password === password) {
    return true;
  }

  return false;
};

const logOut = async () => {
  await Keychain.resetGenericPassword();
};

const checkIfUserExists = async () => {
  const credentials = await Keychain.getGenericPassword();

  if (credentials.username && credentials.password) {
    return true;
  }

  return false;
};

export default {
  register,
  logIn,
  checkIfUserExists,
  logOut,
};
