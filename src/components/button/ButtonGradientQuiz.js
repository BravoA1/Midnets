import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../infrastructure/theme";
import { useState, useEffect } from "react";

const ScreenWitdh = Dimensions.get("window").width;

export const ButtonGradientQuiz = ({
  title = "title",
  onPress,
  result,
  disabled,
  width = 0.4,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: theme.fonts.body,
    },
    containerText: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      color: "#000",
      width: "100%",
      /* height: 100%; */
      borderRadius: 100,
    },
    touchableOpacity: {
      elevation: 10,
      zIndex: 1,
      width: ScreenWitdh * width,
      //box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
      backgroundColor: "#fff",
      borderRadius: 100,
      /* margin-bottom: 30px; */
      marginBottom: Platform.OS === "ios" ? 30 : 0,
      textAlign: "center",
    },
    text: {
      fontSize: 16,
      textAlign: "center",
    },
    linearGradient: {
      width: "100%",
      borderRadius: 100,
      padding: 0,
    },
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
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={onPress}
      disabled={disabled}
    >
      <LinearGradient
        style={styles.linearGradient}
        colors={[`${color}`, "rgba(255,255,255,0)"]}
        locations={[0, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={styles.containerText}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
