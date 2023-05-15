import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatlistBlur } from "../src/screens/FlatlistBlur";

export type RootStackParamList = {
  Drawer: undefined;
  Details: { name: string };
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const DrawerNavigation = (): JSX.Element => {
  return (
    <Drawer.Navigator
      initialRouteName="FlatlistBlur"
      screenOptions={{ headerShown: true, headerTransparent: true }}
    >
      <Drawer.Screen
        name="FlatlistBlur"
        component={FlatlistBlur}
        options={{ headerTintColor: "#fff" }}
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
