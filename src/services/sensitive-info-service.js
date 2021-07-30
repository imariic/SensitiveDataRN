import SInfo from "react-native-sensitive-info";

const sharedPreferencesName = "mySharedPrefs";
const keychainService = "myKeychain";

const register = async (userDetails) => {
  const { username, password } = userDetails;

  const savingUsername = await SInfo.setItem("username", username, {
    sharedPreferencesName: sharedPreferencesName,
    keychainService: keychainService,
  });

  const savingPassword = await SInfo.setItem("password", password, {
    sharedPreferencesName: sharedPreferencesName,
    keychainService: keychainService,
  });
};

const logIn = async () => {
  const gettingUsername = await SInfo.getItem("username", {
    sharedPreferencesName: sharedPreferencesName,
    keychainService: keychainService,
  });

  const gettingPassword = await SInfo.getItem("password", {
    sharedPreferencesName: sharedPreferencesName,
    keychainService: keychainService,
  });
};

export default {
  register,
  logIn,
};
