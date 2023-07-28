import { StatusBar } from "expo-status-bar";
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { theme } from "../../infrastructure/theme";

const image_oops = require("../../img/oops.jpg");
const image_background = require("../../img/background.png");
const image_home = require("../../img/home.png");
const image_fork = require("../../img/fork.png");

const ScreenWidth = Dimensions.get("window").width;
const ScreenWidth_070 = (ScreenWidth * 7) / 10;
const ScreenWidth_050 = ScreenWidth / 2;
const ScreenWidth_045 = (ScreenWidth * 45) / 100;

export const ErrorScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ImageBackground source={image_background}>
        <Image source={image_fork} style={styles.imageForkTop} />
        <Image source={image_fork} style={styles.imageForkBottom} />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.centeredView}>
            <Text style={styles.oopsTitle}>Oops!</Text>
            <View style={styles.imageView}>
              <Image source={image_oops} style={styles.image} />
            </View>
            <View style={styles.flushedLeftView}>
              <Text style={styles.paragraph}>
                LA PAGE QUE VOUS RECHERCHEZ SEMBLE INTROUVABLE
              </Text>
            </View>
            <View style={styles.borderedView}>
              <Text style={styles.error}>ERREUR 404</Text>
            </View>
            <View style={styles.centeredItemView}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.homeButton}
              >
                <Image source={image_home} style={styles.imageHome} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    margin: "auto",
    width: (ScreenWidth * 3) / 4,
    marginTop: StatusBar.currentHeight && StatusBar.currentHeight,
    marginTop: theme.space[5],
  },
  homeButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#d1d1d1",
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
    elevation: 5,
  },
  error: {
    fontFamily: theme.fonts.body,
    textAlign: "center",
    fontSize: 16,
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.brand.secondary,
  },
  paragraph: {
    fontFamily: theme.fonts.body,
    textAlign: "left",
    fontSize: 24,
    marginBottom: theme.space[4],
    marginLeft: theme.space[1],
  },
  imageView: {
    width: ScreenWidth_070,
    height: ScreenWidth_050,
  },
  oopsTitle: {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: 56,
    textAlign: "center",
    //marginTop: theme.space[5],
    marginTop: 70,
    marginBottom: theme.space[3],
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    alignItems: "center",
  },
  centeredView: {
    alignItems: "center",
    width: ScreenWidth_070,
    backgroundColor: "white",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "black",
  },
  centeredItemView: {
    alignItems: "center",
  },
  borderedView: {
    width: "100%",
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "black",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "75%",
    marginBottom: 20,
    borderColor: "black",
    borderWidth: 1,
  },
  imageHome: {
    resizeMode: "cover",
  },
  imageForkTop: {
    position: "absolute",
    zIndex: 100,
    width: ScreenWidth_045,
    height: (ScreenWidth_045 * 3) / 10,
    top: 20,
    right: -35,
  },
  imageForkBottom: {
    position: "absolute",
    zIndex: 100,
    width: ScreenWidth_045,
    height: (ScreenWidth_045 * 3) / 10,
    bottom: 20,
    left: -35,
    transform: [{ rotate: "180deg" }],
  },
});
