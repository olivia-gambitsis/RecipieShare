import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import WelcomeScreen from './app/screens/WelcomeScreen'

//SafeAreaView add padding on the top to ensure text is within safe area

export default function App() {
  return(
      <WelcomeScreen/>
  );
}
