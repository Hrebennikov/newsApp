import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import MainStack from './navigation/navigate';

const fonts = () => Font.loadAsync({
  "mt-bold": require("./assets/fonts/MontserratAlternates-Bold.ttf"),
  "mt-light": require("./assets/fonts/MontserratAlternates-Light.ttf"),
})

export default function App() {
  const [font, setFont] = useState(false);

  const handleFinishLoading = () => {
    setFont(true);
  }

   return font ? (
    <MainStack />
  ) :
  (
    <AppLoading 
      startAsync={fonts}
      onFinish={handleFinishLoading}
      onError={console.warn}
    />
  );

}

const styles = StyleSheet.create({
  
});
