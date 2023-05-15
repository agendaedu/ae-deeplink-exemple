import { Animated, Image, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

export const ViewCard = styled(View)<{ width: number; height: number }>`
  width: ${(props): number => props.width}px;
  height: ${(props): number => props.height}px;
  align-items: center;
  justify-content: center;
`;

export const ImageCard = styled(Image)<{ width: number; height: number }>`
  width: ${(props): number => props.width}px;
  height: ${(props): number => props.height}px;
  border-radius: 20px;
`;
export const ViewBlurBackground = styled.View`
  ${StyleSheet.absoluteFill}
`;
export const ImageBlurBackground = styled(Animated.Image)`
  ${StyleSheet.absoluteFill}
`;
