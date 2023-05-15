import { ImageBackground } from "react-native";
import styled from "styled-components/native";

export const Container = styled(ImageBackground)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: #7f42d9;

  max-height: 100%;
`;

export const Content = styled.View`
  flex: 1;
  flexdirection: row;
  align-items: center;
  width: 100%;
  max-height: 50%;
  padding: 50px 10px;
  background-color: #ffffff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(76, 11, 172, 0.6);
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #ffffff;
`;

export const ButtonContainer = styled.View`
  width: 80%;
`;

export const ErrorMessage = styled.Text`
  color: red;
  margin-top: 10px;
`;

export const EnterButton = styled.Button`
  color: #ffffff;
`;
