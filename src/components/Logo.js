import { StyleSheet, Image } from "react-native";
import styled from "styled-components/native";

const LogoContainer = styled.Image`
  width: 100%;
  height: 15%;
`;

export default function Logo({ height }) {
  let heightChild;
  if (height === "default") {
    heightChild = "15%";
  } else {
    heightChild = height;
  }

  console.log(heightChild);
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
