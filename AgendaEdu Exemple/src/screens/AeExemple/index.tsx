import React, { useEffect, useState } from "react";
import { TouchableOpacity, Linking } from "react-native";
import { getFakeData } from "../../core/service";
import { FormContainer, Text, CardContainer, Image } from "./styles";

export function AeExemple() {
  const [values, setValues] = useState({ url: "" });

  const handleLogoPress = () => {
    // Lógica a ser executada quando a logo for clicada
    values?.url && Linking.openURL(values.url);
  };

  // aqui vamos mockar um deeplink Agendaedu Partner exemple
  const fetchUserData = () => {
    const fetchUserData = async () => {
      const response = await getFakeData("sandbox");

      const { attributes } = response;

      setValues({ ...values, url: attributes?.url });
      return null;
    };

    fetchUserData();
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <FormContainer>
      <Text></Text>
      <Text>Assim o app parceiro será chamado: {values.url}</Text>
      <TouchableOpacity onPress={handleLogoPress}>
        <CardContainer>
          <Image
            source={{
              uri: "https://static.agendaedu.com/empty_state/teachers.png",
            }}
          />
        </CardContainer>
      </TouchableOpacity>
      <Text> Click na logo para simular</Text>
    </FormContainer>
  );
}
