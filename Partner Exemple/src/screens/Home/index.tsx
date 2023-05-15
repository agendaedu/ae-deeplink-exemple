import React, { useRef } from "react";

import {
  SafeAreaView,
  StatusBar,
  Animated,
  Dimensions,
  ToastAndroid,
} from "react-native";
import {
  ViewBlurBackground,
  ImageBlurBackground,
  ViewCard,
  ImageCard,
} from "./styles";

const { width, height } = Dimensions.get("screen");

export function Home({ route }) {
  const imageW = width * 0.7;
  const imageH = imageW * 1.54;
  const scrollX = useRef(new Animated.Value(0)).current;

  const DATA_IMAGES = [
    "https://static.agendaedu.com/empty_state/classrooms.png",
    "https://static.agendaedu.com/empty_state/responsible_profiles.png",
    "https://static.agendaedu.com/empty_state/team.png",
    "https://static.agendaedu.com/empty_state/teachers.png",
  ];

  if (route.params) {
    const { access_token, token_type } = route.params;
    // console.log(access_token, token_type);

    ToastAndroid.show(
      `Bem-vindo a Home, token: ${access_token}`,
      ToastAndroid.LONG
    );
  }

  return (
    <SafeAreaView>
      <>
        <StatusBar hidden />

        <ViewBlurBackground>
          {DATA_IMAGES.map((image: string, index: number) => {
            const opacity = scrollX.interpolate({
              inputRange: [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ],
              outputRange: [0, 1, 0],
            });

            return (
              <ImageBlurBackground
                testID={`background-card-${index}`}
                key={`${index}`}
                source={{ uri: image }}
                opacity={opacity}
                blurRadius={50}
              />
            );
          })}
        </ViewBlurBackground>

        <Animated.FlatList
          testID="list-card"
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA_IMAGES}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ViewCard width={width} height={height}>
                <ImageCard
                  testID={`image-card-${index}`}
                  source={{ uri: item }}
                  width={imageW}
                  height={imageH}
                />
              </ViewCard>
            );
          }}
        />
      </>
    </SafeAreaView>
  );
}
