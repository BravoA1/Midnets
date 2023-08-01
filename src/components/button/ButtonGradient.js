import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../infrastructure/theme";

const ScreenWitdh = Dimensions.get("window").width;

export const ButtonGradient = ({
  title = "title",
  onPress,
  disabled = false,
  widthRatio = 0.4,
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
      // height: 100%; /
      borderRadius: 100,
    },
    touchableOpacity: {
      elevation: 10,
      zIndex: 1,
      width: ScreenWitdh * widthRatio,
      //box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
      backgroundColor: "#fff",
      borderRadius: 100,
      //marginBottom: 30,
      marginBottom: Platform.OS === "ios" ? 30 : 20,
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

  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={onPress}
      disabled={disabled}
    >
      <LinearGradient
        style={styles.linearGradient}
        colors={["#D8C2EF", "#FFFFFF"]}
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
