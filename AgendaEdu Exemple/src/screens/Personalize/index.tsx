import React, { useState } from "react";
import { TouchableOpacity, Linking } from "react-native";
import { getSandboxData } from "../../core/service";
import { FormContainer, Input, Text, CardContainer, Image } from "./styles";

export function Personalize() {
  const [values, setValues] = useState({
    url: "",
    schema: "",
    data: "",
    logo: "",
  });

  const handleLogoPress = () => {
    // Lógica a ser executada quando a logo for clicada
    values?.url && Linking.openURL(`${values.schema}://${values.data}`);
  };

  return (
    <FormContainer>
      <Input
        onChangeText={(schema: string) => setValues({ ...values, schema })}
        value={values.schema}
        placeholder="schema  ex: myapp"
      />
      <Input
        onChangeText={(data: string) => setValues({ ...values, data })}
        value={values.data}
        placeholder="Data ex: token/values"
      />
      <Input
        onChangeText={(logo: string) => setValues({ ...values, logo })}
        value={values.logo}
        placeholder="https://static.agendaedu.com/empty_state/classrooms.png"
      />

      <Text>
        Assim o app parceiro será chamado: {values.schema}:// {values.data}
      </Text>
      <TouchableOpacity onPress={handleLogoPress}>
        <CardContainer>
          <Image
            source={{
              uri: values.logo,
            }}
          />
        </CardContainer>
      </TouchableOpacity>
      <Text> Click na logo para simular</Text>
    </FormContainer>
  );
}
