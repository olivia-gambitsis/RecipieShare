import React from "react";
import { ImageBackground, StyleSheet, View, Text, Button } from "react-native";

const WelcomeScreen = () => {
  return (
    <>
      <ImageBackground
        source={require("../assets/food.png")}
        style={styles.background}
        imageStyle={{opacity:0.5}}
      >
        <View style ={styles.titleContainer}>
          <Text style ={styles.title}>Recipie {"\n"} Share</Text>
        </View>
        <View style={styles.loginButton}>
            <Button color="#fff" title="Login"/>
        </View>
        <View style={styles.registerButton}>
            <Button color="#fff" title="Register"/>
        </View>
      </ImageBackground>
    </>
  );5
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
    color: '#fff',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
},
titleContainer:{
    position: "absolute",
    top: 200,
    alignItems:"center",

  }
});

export default WelcomeScreen;
