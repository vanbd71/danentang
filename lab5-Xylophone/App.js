// App.js

import React from "react";
import { SafeAreaView } from "react-native";
import Xylophone from "./components/Xylophone";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Xylophone />
    </SafeAreaView>
  );
};

export default App;
