import React, { useState } from "react";
import { TouchableOpacity, Linking } from "react-native";
import { getSandboxData } from "../../core/service";
import { FormContainer, Input, Text, CardContainer, Image } from "./styles";

export function Sandbox() {
  const [values, setValues] = useState({
    sandbox: "",
    url: "",
  });

  const handleLogoPress = () => {
    // Lógica a ser executada quando a logo for clicada
    values?.url && Linking.openURL(values.url);
  };

  // aqui você ira simular a Agendaedu gerando sua url deeplink
  const fetchUserData = () => {
    const fetchUserData = async () => {
      const response = await getSandboxData(values.sandbox);

      const { attributes } = response;

      setValues({ ...values, url: attributes?.url });
      return null;
    };

    fetchUserData();
  };

  return (
    <FormContainer>
      <Input
        onChangeText={(logo: string) => setValues({ ...values, logo })}
        value={values.sandbox}
        placeholder="Sandbox  ex:http//sandbox. ..."
      />
      <TouchableOpacity onPress={fetchUserData}>
        <Text>Buscar dados no SandBox</Text>
      </TouchableOpacity>
      <Text></Text>
      <Text>Assim o app parceiro será chamado: {values.url}</Text>
      <TouchableOpacity onPress={handleLogoPress}>
        <CardContainer>
          <Image
            source={{
              uri: "https://static.agendaedu.com/empty_state/classrooms.png",
            }}
          />
        </CardContainer>
      </TouchableOpacity>
      <Text> Click na logo para simular</Text>
    </FormContainer>
  );
}
