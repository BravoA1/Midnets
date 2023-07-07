import { useEffect, useState } from "react";
import { StyleSheet, Image, Keyboard, Dimensions } from "react-native";
import styled from "styled-components/native";

const LogoContainer = styled.Image`
  width: 100%;
  height: 15%;
`;

export default function Logo({ height }) {
  const [keyboard, setKeyboard] = useState(false);
  const [heightChild, setHeightChild] = useState();
  const windowHeight = Dimensions.get("window").height;

  Keyboard.addListener("keyboardDidShow", () => {
    setKeyboard(true);
  });
  Keyboard.addListener("keyboardDidHide", () => {
    setKeyboard(false);
  });

  useEffect(() => {
    if (height === "default") {
      if (keyboard) {
        setHeightChild((windowHeight * 15) / 100);
      } else {
        setHeightChild("15%");
      }
    } else if (!keyboard) {
      setHeightChild(height);
    }
    console.log(windowHeight);
  }, [keyboard]);

  console.log({ heightChild });
  const styles = StyleSheet.create({
    logo: {
      resizeMode: "contain",
      height: heightChild,
    },
  });
  return (
    <LogoContainer source={require("../img/logo.png")} style={styles.logo} />
  );
}
