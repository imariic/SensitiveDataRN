import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LogIn, Register, Content } from "./screens";
import { RnKeychainService } from "./services";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const [ifUserExists, setIfUserExists] = useState(() => {
    RnKeychainService.checkIfUserExists().then(() => setIfUserExists(true));
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={LogIn} />
        {!ifUserExists && <Stack.Screen name="Register" component={Register} />}
        <Stack.Screen name="Content" component={Content} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
