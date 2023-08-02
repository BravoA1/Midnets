import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../../infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";

export const ButtonRules = ({ onPress }) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: theme.fonts.body,
    },
    containerText: {
      justifyContent: "center",
      alignItems: "center",
      color: "#000",
      width: "100%",
      borderRadius: 100,
    },
    touchableOpacity: {
      width: 60,
      height: 60,
      elevation: 10,
      zIndex: 1,
      backgroundColor: "#fff",
      borderRadius: 100,
      marginBottom: Platform.OS === "ios" ? 20 : 10,
      textAlign: "center",
      position: "absolute",
      bottom: 0,
      left: theme.space[4],
    },
    text: {
      fontSize: 13,
      textAlign: "center",
    },
    linearGradient: {
      width: "100%",
      borderRadius: 100,
      padding: 0,
      alignItems: "center",
      justifyContent: "flex-end",
      height: "100%",
    },
  });

  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
      <LinearGradient
        style={styles.linearGradient}
        colors={["#D8C2EF", "#FFFFFF"]}
        locations={[0, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Règles</Text>
          <Ionicons name="chevron-down" size={25} color="black" />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
