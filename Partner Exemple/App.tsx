import React from "react";
import "react-native-gesture-handler";

import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { Router } from "./src/routes/Router";
import "./src/core/service/FakeApi";

const App = () => {
  const navigationRef = useNavigationContainerRef();

  const linking = {
    prefixes: ["apppartner://"],
    config: {
      screens: {
        Home: "sso/:sort",
      },
    },
    getStateFromPath: (path: string): void => {
      const [route, token] = path.split("/");

      if (route === "sso" && token) {
        /**
         * você deve contruir essa lógica em outro local.
         * como por exemplo nos sagas, disparando um action ou
         * você deve navegar para uma view correspondete e realizar suas tratativa.
         * lembre-se, isso é apenas um exemplo. visite a documentação oficial para SSO AgendaEdu
         * https://agenda-edu.stoplight.io/docs/sso/f2tnbzx4eraxp-sso-da-agenda-edu
         */
        fetch(`api.agendaedu.com/sso`, { token: token })
          .then((res) => res.json())
          .then((json) => {
            // aqui deve iniciar sua loginca interna de validações
            // console.log(json);
            navigationRef.navigate("Home", json);
          });
      }
    },
  };

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <Router />
    </NavigationContainer>
  );
};

export default App;
