// src/Xylophone.js

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Sound from "react-native-sound";

// Khởi tạo âm thanh cho từng nốt nhạc
const sounds = [
  new Sound("1.wav", Sound.MAIN_BUNDLE, (error) => {
    if (error) console.log(error);
  }),
  new Sound("2.wav", Sound.MAIN_BUNDLE, (error) => {
    if (error) console.log(error);
  }),
  new Sound("3.wav", Sound.MAIN_BUNDLE, (error) => {
    if (error) console.log(error);
  }),
  new Sound("4.wav", Sound.MAIN_BUNDLE, (error) => {
    if (error) console.log(error);
  }),
  new Sound("5.wav", Sound.MAIN_BUNDLE, (error) => {
    if (error) console.log(error);
  }),
  new Sound("6.wav", Sound.MAIN_BUNDLE, (error) => {
    if (error) console.log(error);
  }),
  new Sound("7.wav", Sound.MAIN_BUNDLE, (error) => {
    if (error) console.log(error);
  }),
];

const Xylophone = () => {
  const playSound = (index) => {
    sounds[index].play();
  };

  return (
    <View style={styles.container}>
      {sounds.map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.key,
            { backgroundColor: `hsl(${index * 50}, 100%, 50%)` },
          ]}
          onPress={() => playSound(index)}
        >
          <Text style={styles.text}>Note {index + 1}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "#fff",
  },
  key: {
    width: 50,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Xylophone;
