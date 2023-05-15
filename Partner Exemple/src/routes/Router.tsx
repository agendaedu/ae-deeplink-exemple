import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";

export interface RootStackParamList {
  Drawer: undefined;
  Details: { name: string };
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const DrawerNavigation = (): JSX.Element => {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: true, headerTransparent: true }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerTintColor: "#fff" }}
      />

      <Drawer.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export const Router = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};
