import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LogIn, Register, Content } from "./screens";
import { RnKeychainService } from "./services";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const [ifUserExists, setIfUserExists] = useState(false);

  useEffect(() => {
    RnKeychainService.checkIfUserExists().then((data) => setIfUserExists(data));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        {!ifUserExists ? (
          <>
            <Stack.Screen
              name="Login"
              component={() => <LogIn setIfUserExists={setIfUserExists} />}
            />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <Stack.Screen
            name="Content"
            component={() => <Content setIfUserExists={setIfUserExists} />}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
