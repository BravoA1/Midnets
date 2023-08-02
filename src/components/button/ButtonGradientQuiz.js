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
import { useEffect, useState } from "react";

const ScreenWitdh = Dimensions.get("window").width;

const platform = Platform.OS

export const ButtonGradientQuiz = ({
  title = "title",
  onPress,
  disabled = false,
  widthRatio = 0.4,
  result
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
      height: "100%",
      borderRadius: 100,
    },
    touchableOpacity: {
      elevation: 10,
      zIndex: 1,
      width: ScreenWitdh * widthRatio,
      backgroundColor: "#fff",
      borderRadius: 100,
      marginBottom: Platform.OS === "ios" ? 30 : 20,
      textAlign: "center",
      height: 60,
    },
    text: {
      fontSize: platform === "ios" ? 12 : 16,
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
        colors={[color, "#FFFFFF"]}
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
