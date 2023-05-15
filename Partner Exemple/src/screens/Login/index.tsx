import React, { useState } from "react";
import {
  Container,
  Content,
  Input,
  ButtonContainer,
  EnterButton,
  ErrorMessage,
} from "./styles";

export function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Lógica de autenticação aqui
    if (email === "partner@ae.com" && password === "partner") {
      // Login bem-sucedido

      // Redirecionar para a próxima tela
      navigation.navigate("Home");
    } else {
      // Exibir mensagem de erro
      setError("Credenciais inválidas");
    }
  };

  return (
    <Container
      source={{
        uri: "https://static.agendaedu.com/empty_state/responsible_profiles.png",
      }}
      resizeMode="cover"
    >
      <Content>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <ButtonContainer>
          <EnterButton title="Entrar" onPress={handleLogin} />
        </ButtonContainer>
        {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
      </Content>
    </Container>
  );
}
