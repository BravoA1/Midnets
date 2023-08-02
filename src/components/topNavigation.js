import { styled } from "styled-components/native";
import {
  StatusBar,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { colors } from "../infrastructure/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState, useContext } from "react";
import { UserContext } from "../services/user/user.context";
import { LinearGradient } from "expo-linear-gradient";

const Container = styled.View`
  position: absolute;
  top: 20%;
  left: ${windowWidth * 0.4}px;
  flex: 1;
  margin: auto;
  z-index: 2;
`;

const ContainerNavigation = styled.View`
  position: absolute;
  left: ${windowWidth * -0.4}px;
  flex: 1;
  width: 100%;
  height: 100%;
  margin: auto;
  z-index: 2;
`;

const VerticalLine = styled.View`
  height: 5%;
  width: 50%;
  background-color: black;
`;

export const TopNavigation = ({ navigation }) => {
  const { info, user } = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const styles = StyleSheet.create({
    container: {
      left: visible ? windowWidth * 0.4 : windowWidth * -0.128,
    },
    containerCenter: {
      justifyContent: "center",
      alignItems: "center",
    },
    circle: {
      backgroundColor: visible ? colors.brand.tertiary : "#D8C2EF95",
      justifyContent: "center",
      alignItems: "flex-end",
      borderRadius: 50,
      height: windowWidth * 0.2,
      width: windowWidth * 0.235,
    },
    navigation: {
      backgroundColor: colors.brand.tertiary,
      height: windowWidth * 0.6,
      width: windowWidth * 0.53,
    },
    font: {
      fontSize: windowWidth * 0.053,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: "#000000",
      fontSize: 16,
    },
  });
  return (
    <Container style={styles.container}>
      <ContainerNavigation style={styles.navigation}>
        <LinearGradient
          colors={["#FFFFFF", "#D8C2EF"]}
          locations={[0.05, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientContainer}
        >
          <View style={styles.containerCenter}>
            <Text style={styles.font}>Menu</Text>
            <VerticalLine />
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("QuizTheme")}
            >
              <Text style={styles.buttonText}>Quizz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Portrait")}
            >
              <Text style={styles.buttonText}>Portrait</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Forum")}
            >
              <Text style={styles.buttonText}>Forum</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Contact")}
            >
              <Text style={styles.buttonText}>Contact</Text>
            </TouchableOpacity>
            {user ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Signout")}
              >
                <Text style={styles.buttonText}>Déconnexion</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.buttonText}>Connexion</Text>
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>
      </ContainerNavigation>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.circle}
      >
        <Ionicons
          size={50}
          color="black"
          name={visible ? "chevron-back-sharp" : "chevron-forward-sharp"}
        ></Ionicons>
      </TouchableOpacity>
    </Container>
  );
};
