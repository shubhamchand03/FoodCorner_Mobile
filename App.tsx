import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{ uri: "https://app-foodcorner.herokuapp.com/" }}
      startInLoadingState={true}
      scalesPageToFit={true}
      style={{
        alignContent: "center",
        padding: 10,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 400,
  },
});
