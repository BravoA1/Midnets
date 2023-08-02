import {
  Button,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../components/Logo";
import styled from "styled-components/native";
import { H1 } from "../../components/theme";
import { useState } from "react";
import { CardPortrait } from "../../components/CardPortrait";
import MaskedView from "@react-native-community/masked-view";
import ButtonResponse from "../../components/button/ButtonResponse";
import ButtonGradient2 from "../../components/button/ButtonGradient2";

const isAndroid = Platform.OS === "android";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Container = styled.SafeAreaView`
  flex: 1;
  /* ${StatusBar.currentHeight &&
  !isAndroid &&
  `margin-top: ${StatusBar.currentHeight}px`}; */
`;

const LogoContainer = styled.View`
  padding: 40px;
  background-color: white;
  box-shadow: 0 500px 500px rgba(0, 0, 0, 0.5);
  elevation: 15;
`;

export const HomeScreen = ({ navigation }) => {
  const [portrait, setPortrait] = useState(false);
  const [defi, setDefi] = useState(false);
  const [forum, setForum] = useState(false);

  const NavBar = styled.View`
    left: ${windowWidth * 0.03}px;
    top: ${windowWidth * 0.07}px;
    position: absolute;
    width: ${windowWidth * 0.15}px;
    height: 60%;

    align-items: center;
  `;

  const VerticalLine = styled.View`
    height: ${windowWidth * 0.009}px;
    width: ${windowWidth * 0.05}px;
    background-color: black;
  `;

  const LongVerticalLine = styled.View`
    height: 1%;
    width: 50%;
    background-color: black;
  `;

  const HorizontalLine = styled.View`
    margin-top: ${windowWidth * -0.001}px;
    width: ${windowWidth * 0.009}px;
    height: ${windowWidth * 0.55}px;
    background-color: black;
  `;

  //////////////////////////////////////////////////

  const GroupContainer = styled.View`
    flex: 1;
    padding: 5%;
    align-items: center;
  `;

  const Collumn = styled.View`
    flex-direction: column;
  `;

  const TitleContainer = styled.View`
    flex-direction: row;
    width: ${windowWidth * 0.833}px;
    align-items: center;
    margin-top: ${(props) => props.theme.space[3]};
  `;

  const BlackDot = styled.View`
    position: relative;
    width: 5%;
    aspect-ratio: 1 / 1;
    background-color: black;
    border-radius: 500px;
  `;

  const styles = StyleSheet.create({
    blackdot: {
      width: "10%",
      right: windowWidth * 0.019,
    },
    horizontal: {
      height: "150%",
    },
  });

  const New = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 10px;
  `;

  const PortraitView = styled.View`
    margin: 10px 0;
    width: ${(windowWidth * 3) / 4}px;
  `;

  const Title = styled.View`
    width: 100%;
  `;

  const TitleGradiant = styled(LinearGradient)`
    border-radius: 15px;
    padding: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;

  const ImageContainer = styled.View`
    margin: 5px;
  `;

  const ParagraphGradiant = styled(LinearGradient)`
    margin-right: ${(props) => props.theme.space[3]};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    width: 78%;
    position: relative;
    left: 15%;
  `;

  const Paragraph = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.button};
  `;

  const ParagraphTitle = styled.Text`
    font-size: 20px;
  `;

  const bg = require("../../img/background2.png");
  const Background = styled.Image`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    min-height: ${windowHeight}px;
  `;

  const bg2 = require("../../img/uyfgFichier_44x.png");
  const BackgroundSquare = styled.Image`
    transform: rotate(180deg);
    width: ${windowWidth * 0.8};
    height: ${windowWidth * 0.8};
  `;

  const bg3 = require("../../img/pexels-shvets-production-7176325.jpg");

  const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
  const styles2 = StyleSheet.create({
    image: {
      flex: 1,
      marginTop: windowWidth * 0.02,
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
    },
  });
  const styles3 = StyleSheet.create({
    image: {
      left: windowWidth * 0.094,
      width: windowWidth * 0.8,
      height: windowHeight * 0.35,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 30,
      paddingHorizontal: 15,
    },
    containerUsefulLink: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      marginVertical: "auto",
    },
    cover: {
      width: "100%",
      opacity: 0.8,
      backgroundColor: "rgba(255,255,255,.78)",
      alignItems: "center",
      marginBottom: windowWidth * 0.05,
      borderRadius: 25,
      gap: 10,
    },
    contentImage: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: windowHeight * 0.02,
      fontWeight: "bold",
      textAlign: "center",
      padding: 10,
    },
    text2: {
      fontSize: windowHeight * 0.015,
      fontWeight: "bold",
      textAlign: "center",
      width: "85%",
      paddingBottom: 10,
    },
  });

  const ForumLink = styled.View`
    margin-top: ${windowWidth * 0.1}px;
    height: ${windowWidth * 0.9}px;
  `;

  return (
    <>
      <Container>
        <Background source={bg} />

        <ScrollView>
          <LogoContainer
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.5,
              shadowRadius: 20,
              elevation: 15,
            }}
          >
            <Logo height={100} />
          </LogoContainer>
          <View style={{ flex: 1 }}>
            <NavBar>
              <VerticalLine />
              <HorizontalLine style={(portrait || defi) && styles.horizontal} />
              <VerticalLine />
            </NavBar>
            <GroupContainer>
              <Collumn>
                <TitleContainer>
                  <BlackDot style={portrait && styles.blackdot} />
                  <TouchableOpacity
                    onPress={() => {
                      setPortrait(!portrait);
                      setDefi(false);
                      setForum(false);
                    }}
                    style={{
                      width: "95%",
                    }}
                  >
                    <Title>
                      <TitleGradiant
                        colors={[
                          "#ffffff00",
                          portrait ? "#D8C2EF" : "lightgrey",
                        ]}
                        locations={[
                          portrait ? 0.2 : 0.05,
                          portrait ? 0.8 : 0.15,
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                      >
                        <H1 style={{ width: "70%", marginLeft: "10%" }}>
                          Portraits
                        </H1>
                        <ImageContainer>
                          <Image
                            source={{
                              uri: "https://img.icons8.com/ios/50/circled-chevron-up.png",
                            }}
                            style={{
                              height: 40,
                              width: 40,
                              transform: [
                                { rotate: portrait ? "270deg" : "180deg" },
                              ],
                            }}
                          />
                        </ImageContainer>
                      </TitleGradiant>
                    </Title>
                  </TouchableOpacity>
                </TitleContainer>
                <ParagraphGradiant
                  colors={["#ffffff00", "#D9D9D9"]}
                  locations={[0.05, 0.15]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Error")}
                  >
                    <Paragraph style={{ display: portrait ? "flex" : "none" }}>
                      The missile knows where it is at all times. It knows this
                      because it knows where it isn't, by subtracting where it
                      is, from where it isn't, or where it isn't, from where it
                      is, whichever is greater, it obtains a difference, or
                      deviation.
                    </Paragraph>
                  </TouchableOpacity>
                </ParagraphGradiant>
              </Collumn>
              <Collumn>
                <TitleContainer>
                  <BlackDot style={defi && styles.blackdot} />
                  <TouchableOpacity
                    onPress={() => {
                      setPortrait(false);
                      setDefi(!defi);
                      setForum(false);
                    }}
                    style={{
                      width: "95%",
                    }}
                  >
                    <Title>
                      <TitleGradiant
                        colors={["#ffffff00", defi ? "#D8C2EF" : "lightgrey"]}
                        locations={[defi ? 0.2 : 0.05, defi ? 0.8 : 0.15]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                      >
                        <H1 style={{ width: "70%", marginLeft: "10%" }}>
                          Défi
                        </H1>
                        <ImageContainer>
                          <Image
                            source={{
                              uri: "https://img.icons8.com/ios/50/circled-chevron-up.png",
                            }}
                            style={{
                              height: 40,
                              width: 40,
                              transform: [
                                { rotate: defi ? "270deg" : "180deg" },
                              ],
                            }}
                          />
                        </ImageContainer>
                      </TitleGradiant>
                    </Title>
                  </TouchableOpacity>
                </TitleContainer>
                <ParagraphGradiant
                  colors={["#ffffff00", "#D9D9D9"]}
                  locations={[0.05, 0.15]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("QuizTheme")}
                  >
                    <Paragraph style={{ display: defi ? "flex" : "none" }}>
                      The missile knows where it is at all times. It knows this
                      because it knows where it isn't, by subtracting where it
                      is, from where it isn't, or where it isn't, from where it
                      is, whichever is greater, it obtains a difference, or
                      deviation.
                    </Paragraph>
                  </TouchableOpacity>
                </ParagraphGradiant>
              </Collumn>
              <Collumn>
                <TitleContainer>
                  <BlackDot style={forum && styles.blackdot} />
                  <TouchableOpacity
                    onPress={() => {
                      setPortrait(false);
                      setDefi(false);
                      setForum(!forum);
                    }}
                    style={{
                      width: "95%",
                    }}
                  >
                    <Title>
                      <TitleGradiant
                        colors={["#ffffff00", forum ? "#D8C2EF" : "lightgrey"]}
                        locations={[forum ? 0.2 : 0.05, forum ? 0.8 : 0.15]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                      >
                        <H1 style={{ width: "70%", marginLeft: "10%" }}>
                          Forum
                        </H1>
                        <ImageContainer>
                          <Image
                            source={{
                              uri: "https://img.icons8.com/ios/50/circled-chevron-up.png",
                            }}
                            style={{
                              height: 40,
                              width: 40,
                              transform: [
                                { rotate: forum ? "270deg" : "180deg" },
                              ],
                            }}
                          />
                        </ImageContainer>
                      </TitleGradiant>
                    </Title>
                  </TouchableOpacity>
                </TitleContainer>
                <ParagraphGradiant
                  colors={["#ffffff00", "#D9D9D9"]}
                  locations={[0.05, 0.15]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ForumHome")}
                  >
                    <Paragraph style={{ display: forum ? "flex" : "none" }}>
                      The missile knows where it is at all times. It knows this
                      because it knows where it isn't, by subtracting where it
                      is, from where it isn't, or where it isn't, from where it
                      is, whichever is greater, it obtains a difference, or
                      deviation.
                    </Paragraph>
                  </TouchableOpacity>
                </ParagraphGradiant>
              </Collumn>
            </GroupContainer>
          </View>
          <New>
            <LongVerticalLine />
            <H1>A là une </H1>
            <PortraitView>
              <CardPortrait
                OnPress={() => navigation.navigate("PortraitArticle")}
                url={require("../../img/portraitSuzyHazelwood.jpg")}
                height={100}
                isNewPortrait={true}
              />
              <ParagraphTitle
                style={{
                  width: "125%",
                  paddingTop: "5%",
                  marginLeft: "-10%",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ParagraphTitle>
              <MaskedView
                maskElement={
                  <LinearGradient
                    style={{ flex: 1 }}
                    colors={["white", "transparent"]}
                  />
                }
              >
                <Paragraph
                  style={{
                    width: "100%",
                    textAlign: "center",
                    paddingTop: "5%",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur voluptatibus ipsam minus aperiam, qui vel commodi
                  aspernatur natus modi facere tempora distinctio accusantium
                  animi blanditiis corporis earum unde doloremque error? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nobis est
                  voluptatibus, tenetur a maxime veritatis quaerat quia
                </Paragraph>
              </MaskedView>
            </PortraitView>
            <ButtonResponse OnPress={() => navigation.navigate("Error")}>
              En savoir plus
            </ButtonResponse>
            <LongVerticalLine />
          </New>
          <ForumLink>
            <ImageBackground
              source={bg2}
              resizeMode="cover"
              style={styles2.image}
            >
              <ImageBackground
                resizeMode="cover"
                source={bg3}
                style={styles3.image}
              >
                <View style={styles3.contentImage}>
                  <View style={styles3.cover}>
                    <Text style={styles3.text}>
                      Des liens utiles pour vous aider et vous protéger
                    </Text>
                    <Text style={styles3.text2}>
                      (Numéros d'aide, texte de lois, lieux de réfuge,
                      organismes, associations)
                    </Text>
                  </View>
                  <ButtonResponse OnPress={() => navigation.navigate("Error")}>
                    Y accéder
                  </ButtonResponse>
                </View>
              </ImageBackground>
            </ImageBackground>
          </ForumLink>
          <View style={{ width: "100%", alignItems: "center" }}>
            <ButtonGradient2 OnPress={() => navigation.navigate("Error")}>
              A propos de Midnets
            </ButtonGradient2>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};
