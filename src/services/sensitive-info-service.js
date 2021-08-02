import SInfo from "react-native-sensitive-info";

const sharedPreferencesName = "mySharedPrefs";
const keychainService = "myKeychain";

const register = async (userDetails) => {
  const { username, password } = userDetails;

  await SInfo.setItem("username", username, {
    sharedPreferencesName: sharedPreferencesName,
    keychainService: keychainService,
  });

  await SInfo.setItem("password", password, {
    sharedPreferencesName: sharedPreferencesName,
    keychainService: keychainService,
  });
};

const logIn = async ({ username, password }) => {
  const gettingUsername = await SInfo.getItem("username", {
    sharedPreferencesName: sharedPreferencesName,
    keychainService: keychainService,
  });

  const gettingPassword = await SInfo.getItem("password", {
    sharedPreferencesName: sharedPreferencesName,
    keychainService: keychainService,
  });

  return gettingUsername === username && gettingPassword === password;
};

const logOut = async () => {
  await SInfo.deleteItem("username", {
    sharedPreferencesName: sharedPreferencesName,
    keychainService: keychainService,
  });

  await SInfo.deleteItem("password", {
    sharedPreferencesName: sharedPreferencesName,
    keychainService: keychainService,
  });
};

const checkIfUserExists = async () => {
  const gettingUsername = await SInfo.getItem("username", {
    sharedPreferencesName: sharedPreferencesName,
    keychainService: keychainService,
  });

  const gettingPassword = await SInfo.getItem("password", {
    sharedPreferencesName: sharedPreferencesName,
    keychainService: keychainService,
  });

  return gettingUsername && gettingPassword;
};

export default {
  register,
  logIn,
  checkIfUserExists,
  logOut,
};
