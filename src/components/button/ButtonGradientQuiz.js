import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { theme } from "../../infrastructure/theme";
import { useState, useEffect } from "react";
import { styled } from "styled-components/native";

const ScreenWitdh = Dimensions.get("window").width;

export const ButtonGradientQuiz = ({
  title = "title",
  onPress,
  result,
  disabled,
  width = 0.4,
}) => {
  const BoxGradient = styled.TouchableOpacity`
    text-align: center;
    z-index: 1;
    width: 48%;
    background-color: #fff;
    height: 60px;
    border-radius: 100px;
    margin-bottom: ${Platform.OS === `ios` ? 30 : 0};
    margin-bottom: 20px;
  `;

  const LinearButton = styled(LinearGradient)`
    width: 100%;
    border-radius: 100px;
    padding: 0px;
  `;

  const ButtonElement = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #000;
    width: 100%;
    height: 100%;
    border-radius: 100px;
  `;

  const styles = StyleSheet.create({
    text: {
      fontFamily: theme.fonts.body,
    },
    text: {
      fontSize: 16,
      textAlign: "center",
    },
    container: {
      elevation: 10,
    }
  });

  const [color, setColor] = useState("#D8C2EF");

  useEffect(() => {
    switch (result) {
      case "wrong":
        setColor(theme.colors.ui.error);
        break;
      case "correct":
        setColor(theme.colors.ui.success);
        break;
      default:
        setColor("#D8C2EF");
    }
  }, [result]);

  return (
    <BoxGradient
      style={styles.container}
      onPress={onPress}
      disabled={disabled}>
      <LinearButton
        colors={[`${color}`, "rgba(255,255,255,0)"]}
        locations={[0, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <ButtonElement>
          <Text style={styles.text}>{title}</Text>
        </ButtonElement>
      </LinearButton>
    </BoxGradient>
  );
};
