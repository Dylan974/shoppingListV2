import React from "react";
import { NativeBaseProvider, Heading } from "native-base";
import translate from "./src/i18n/language";

const App = function App() {
  return (
    <NativeBaseProvider>
      <Heading>{translate("appTitle")}</Heading>;
    </NativeBaseProvider>
  );
};

export default App;
