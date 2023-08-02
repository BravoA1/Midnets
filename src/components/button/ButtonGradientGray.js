import { styled } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet } from "react-native";
import { useState } from "react";

const screenWitdh = Dimensions.get("window").width;

export default ButtonResponse = ({
  children,
  OnPress,
  result,
  Disabled,
  width = 0.4,
}) => {
  const ButtonElement = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #000;
    width: 100%;
    /* height: 100%; */
    border-radius: 100px;
  `;
  const BoxGradient = styled.TouchableOpacity`
    z-index: 1;
    width: ${screenWitdh * width}px;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-radius: 100px;
    /* margin-bottom: 30px; */
    margin-bottom: ${Platform.OS === "ios" ? "30px" : "0px"};

    text-align: center;
  `;

  const TextButton = styled.Text`
    font-size: 16px;
    text-align: center;
  `;

  const LinearButton = styled(LinearGradient)`
    width: 100%;
    border-radius: 100px;
    padding: 0px;
  `;

  const [color, setColor] = useState("darkgray");

  return (
    <BoxGradient style={styles.container} onPress={OnPress} disabled={Disabled}>
      <LinearButton
        colors={[`${color}`, "lightgray"]}
        locations={[1, 0]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ButtonElement>
          <TextButton>{children}</TextButton>
        </ButtonElement>
      </LinearButton>
    </BoxGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 10,
  },
});
