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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../components/Logo";
import styled from "styled-components/native";
import { H1 } from "../../components/theme";
import { useState } from "react";

const windowHeight = Dimensions.get("window").height;

const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[3]};
  background-color: white;
`;
const LogoContainer = styled.View`
  padding-top: 40px;
`;

const NavBar = styled.View`
  display: flex;
  flex: 0.3;
  padding: 5%;
  align-items: center;
`;
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
  width: ${windowHeight / 3}px;
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};
`;

const BlackDot = styled.View`
  position: relative;
  width: 5%;
  right: 107%;
  aspect-ratio: 1 / 1;
  background-color: black;
  border-radius: 500px;
`;

const HorizontalLine = styled.View`
  width: 1%;
  height: 75%;
  background-color: black;
`;

const VerticalLine = styled.View`
  height: 0.5%;
  width: 30%;
  background-color: black;
`;

const LongVerticalLine = styled.View`
  height: 1%;
  width: 50%;
  background-color: black;
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
  width: 80%;
  position: relative;
  left: 20%;
`;

const Paragraph = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.button};
`;

const New = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const HomeScreen = () => {
  const [portrait, setPortrait] = useState(false);
  const [defi, setDefi] = useState(false);
  const [forum, setForum] = useState(false);

  const styles = StyleSheet.create({
    blackdot: {
      width: "10%",
      right: "118%",
    },
    horizontal: {
      height: "95%",
    },
  });

  return (
    <Container>
      <LogoContainer>
        <Logo height={100} />
      </LogoContainer>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", maxHeight: "65%" }}>
          <NavBar>
            <VerticalLine />
            <HorizontalLine
              style={(portrait || defi || forum) && styles.horizontal}
            />
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
                    width: "85%",
                  }}
                >
                  <Title>
                    <TitleGradiant
                      colors={["white", portrait ? "#D8C2EF" : "lightgrey"]}
                      locations={[portrait ? 0.2 : 0.05, portrait ? 0.8 : 0.15]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <H1>Portraits</H1>
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
                colors={["white", "#D9D9D9"]}
                locations={[0.05, 0.15]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Paragraph style={{ display: portrait ? "flex" : "none" }}>
                  The missile knows where it is at all times. It knows this
                  because it knows where it isn't, by subtracting where it is,
                  from where it isn't, or where it isn't, from where it is,
                  whichever is greater, it obtains a difference, or deviation.
                </Paragraph>
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
                    width: "85%",
                  }}
                >
                  <Title>
                    <TitleGradiant
                      colors={["white", defi ? "#D8C2EF" : "lightgrey"]}
                      locations={[defi ? 0.2 : 0.05, defi ? 0.8 : 0.15]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <H1>Défi</H1>
                      <ImageContainer>
                        <Image
                          source={{
                            uri: "https://img.icons8.com/ios/50/circled-chevron-up.png",
                          }}
                          style={{
                            height: 40,
                            width: 40,
                            transform: [{ rotate: defi ? "270deg" : "180deg" }],
                          }}
                        />
                      </ImageContainer>
                    </TitleGradiant>
                  </Title>
                </TouchableOpacity>
              </TitleContainer>
              <ParagraphGradiant
                colors={["white", "#D9D9D9"]}
                locations={[0.05, 0.15]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Paragraph style={{ display: defi ? "flex" : "none" }}>
                  The missile knows where it is at all times. It knows this
                  because it knows where it isn't, by subtracting where it is,
                  from where it isn't, or where it isn't, from where it is,
                  whichever is greater, it obtains a difference, or deviation.
                </Paragraph>
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
                    width: "85%",
                  }}
                >
                  <Title>
                    <TitleGradiant
                      colors={["white", forum ? "#D8C2EF" : "lightgrey"]}
                      locations={[forum ? 0.2 : 0.05, forum ? 0.8 : 0.15]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <H1>Forum</H1>
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
                colors={["white", "#D9D9D9"]}
                locations={[0.05, 0.15]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Paragraph style={{ display: forum ? "flex" : "none" }}>
                  The missile knows where it is at all times. It knows this
                  because it knows where it isn't, by subtracting where it is,
                  from where it isn't, or where it isn't, from where it is,
                  whichever is greater, it obtains a difference, or deviation.
                </Paragraph>
              </ParagraphGradiant>
            </Collumn>
          </GroupContainer>
        </View>
        <New>
          <LongVerticalLine />
          <H1>A là une </H1>
          <FlatList
            style={{ flex: 1, width: "100%" }}
            data={[1, 2, 3, 4, 5]}
            renderItem={() => (
              <View
                style={{
                  alignItems: "flex-start",
                  flex: 1,
                  width: "80%",
                  margin: "5%",
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    backgroundColor: "lightgray",
                    padding: 5,
                    fontSize: 20,
                  }}
                >
                  Prenom Nom
                </Text>
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "yellow",
                  }}
                ></View>
                <Text
                  style={{
                    position: "relative",
                    bottom: "75%",
                    left: "80%",
                    backgroundColor: "lightgray",
                    fontWeight: "600",
                    fontSize: 25,
                  }}
                >
                  Année
                </Text>
              </View>
            )}
          />
        </New>
      </View>
    </Container>
  );
};
