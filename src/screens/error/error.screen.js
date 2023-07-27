import { View, Image, ImageBackground, StyleSheet } from "react-native";
import { styled } from "styled-components";

const Oops = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.h2};
  text-align: center;
  margin-bottom: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[5]};
`;

const Paragraph = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  text-align: left;
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-bottom: ${(props) => props.theme.space[4]};
  margin-left: ${(props) => props.theme.space[2]};
`;

const Error = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.brand.primary};
`;

const HomeButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #d1d1d1;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0px 3px 1px #999;
  width: 70px;
  height: 70px;
`;

const image_oops = require("../../img/oops.jpg");
const image_background = require("../../img/background.png");
const image_home = require("../../img/home.png");
const image_fork = require("../../img/fork.png");

export const ErrorScreen = ({ navigation }) => {
  return (
    <>
      <Image source={image_fork} style={styles.imageForkTop}></Image>
      <Image source={image_fork} style={styles.imageForkBottom}></Image>
      <ImageBackground source={image_background} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.centeredView}>
            <Oops>Oops!</Oops>
            <Image source={image_oops} style={styles.image} />
            {/* <StyledImage source={image_oops} /> */}
            <View style={styles.flushedLeftView}>
              <Paragraph>
                LA PAGE QUE VOUS RECHERCHEZ SEMBLE INTROUVABLE
              </Paragraph>
            </View>
            <View style={styles.borderedView}>
              <Error>ERREUR 404</Error>
            </View>
            <View style={styles.centeredItemView}>
              <HomeButton onPress={() => navigation.navigate("Home")}>
                <Image source={image_home} style={styles.imageHome} />
              </HomeButton>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    backgroundColor: "white",
    width: "70%",
    height: "100%",
    alignSelf: "center",
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
    height: "30%",
    marginBottom: 20,
    //borderTopWidth: 5,
    //borderBottomWidth: 1,
    //borderLeftWidth: 0,
    //borderRightWidth: 0,
    borderColor: "black",
    borderWidth: 1,
  },
  imageHome: {
    resizeMode: "cover",
  },
  imageForkTop: {
    position: "absolute",
    zIndex: 100,
    width: 200,
    height: 60,
    top: 20,
    right: -35,
  },
  imageForkBottom: {
    position: "absolute",
    zIndex: 100,
    width: 200,
    height: 60,
    bottom: 20,
    left: -35,
    transform: [{ rotate: "180deg" }],
  },
});
