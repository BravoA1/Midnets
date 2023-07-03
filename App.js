import React from "react";
import { ContactScreen } from "./src/screens/contact/contact.screen.js";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";

import { useFonts as useLora, Lora_400Regular } from "@expo-google-fonts/lora";
import {
  useFonts as useAlata,
  Alata_400Regular,
} from "@expo-google-fonts/alata";

export default function App() {
  const [loraLoader] = useLora({
    Lora_400Regular,
  });
  const [alataLoader] = useAlata({
    Alata_400Regular,
  });

  if (!loraLoader || !alataLoader) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <ContactScreen />
    </ThemeProvider>
  );
}
