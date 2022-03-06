import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { RestaurentScreen } from "./src/features/restaurents/screens/restaurent.screen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurentScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
