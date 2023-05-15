import { View } from "react-native";
import styled from "styled-components/native";

export const FormContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 80%;
  border-color: gray;
  border-width: 1px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const CardContainer = styled(View)`
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  elevation: 4;
  margin: 20px;
`;

export const Text = styled.Text`
  color: purple;
  margin: 5px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 18px;
`;
