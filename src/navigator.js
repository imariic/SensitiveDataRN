import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LogIn, Register, Content } from "./screens";
import { SensitiveInfoService } from "./services";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const [ifUserExists, setIfUserExists] = useState(false);

  useEffect(() => {
    SensitiveInfoService.checkIfUserExists().then((data) =>
      setIfUserExists(data)
    );
  }, []);

  const renderLogIn = () => {
    return <LogIn setIfUserExists={setIfUserExists} />;
  };

  const renderContent = () => {
    return <Content setIfUserExists={setIfUserExists} />;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        {!ifUserExists ? (
          <>
            <Stack.Screen name="Login" component={renderLogIn} />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <Stack.Screen name="Content" component={renderContent} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
