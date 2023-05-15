import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import { Sandbox } from "../screens/Sandbox";
import { Personalize } from "../screens/Personalize";
import { AeExemple } from "../screens/AeExemple";

export type RootStackParamList = {
  Drawer: undefined;
  Details: { name: string };
};

const Tab = createBottomTabNavigator();

export const Router = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName="Sandbox">
      <Tab.Screen
        name="Sandbox"
        component={Sandbox}
        options={{
          tabBarLabel: "Sandbox",
          tabBarIcon: ({ color, size }) => (
            <Icon name="link" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Personalize"
        component={Personalize}
        options={{
          tabBarLabel: "Personalizar",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AeExemple"
        component={AeExemple}
        options={{
          tabBarLabel: "Agenda Exemplo",
          tabBarIcon: ({ color, size }) => (
            <Icon name="handshake-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
