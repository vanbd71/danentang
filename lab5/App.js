import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Audio } from "expo-av";
// List of sound files for each note
const notes = [
  require("./assets/1.wav"),
  require("./assets/2.wav"),
  require("./assets/3.wav"),
  require("./assets/4.wav"),
  require("./assets/5.wav"),
  require("./assets/6.wav"),
  require("./assets/7.wav"),
];

export default function App() {
  // Function to play a specific note
  const playSound = async (note) => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(note);
      await soundObject.playAsync();
      // Unload sound after playback
      soundObject.setOnPlaybackStatusUpdate((status) => {
        if (!status.isPlaying) {
          soundObject.unloadAsync();
        }
      });
    } catch (error) {
      console.log("Error playing sound", error);
    }
  };

  // Render a button for each note
  const renderKeys = () => {
    return notes.map((note, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.key, { backgroundColor: generateColor(index) }]}
        onPress={() => playSound(note)}
      >
        <Text style={styles.keyText}>{`Note ${index + 1}`}</Text>
      </TouchableOpacity>
    ));
  };

  // Helper function to generate different colors for each key
  const generateColor = (index) => {
    const colors = [
      "#FF0000",
      "#FF7F00",
      "#FFFF00",
      "#00FF00",
      "#0000FF",
      "#4B0082",
      "#8B00FF",
    ];
    return colors[index % colors.length];
  };

  return <View style={styles.container}>{renderKeys()}</View>;
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  key: {
    width: "80%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
  },
  keyText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
