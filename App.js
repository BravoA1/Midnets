import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useLora,
  Lora_400Regular,
  Lora_700Bold,
  Lora_600SemiBold,
} from "@expo-google-fonts/lora";
import {
  useFonts as useAlata,
  Alata_400Regular,
} from "@expo-google-fonts/alata";
import { Platform } from "react-native";
import { UserContextProvider } from "./src/services/user/user.context";
import { NavBar } from "./src/screens/NavBar/navBar.screen";

const isAndroid = Platform.OS === "android";
export default function App() {
  const [loraLoader] = useLora({
    Lora_400Regular,
    Lora_600SemiBold,
    Lora_700Bold,
  });
  const [alataLoader] = useAlata({
    Alata_400Regular,
  });

  if (!loraLoader || !alataLoader) {
    return null;
  }

  // console.log(Appearance.getColorScheme());

  // const Back = () => <Text>Retour en arrière</Text>;
  // const Notifications = () => <Text>Notifications</Text>;

  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </UserContextProvider>
  );
}
