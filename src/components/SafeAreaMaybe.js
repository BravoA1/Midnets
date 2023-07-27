import { Platform, SafeAreaView } from "react-native";

export const SafeAreaMaybe = ({ children }) => {
  return Platform.OS == "ios" ? (
    <SafeAreaView>{children}</SafeAreaView>
  ) : (
    children
  );
};
