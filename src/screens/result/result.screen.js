import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from "react-native";
import ButtonGradient from "../../components/ButtonGradient";
import styled from "styled-components/native";
import { H1 } from "../../components/theme";

let screenWidth = Dimensions.get("window").width;

const image_background = require("../../img/background.png");

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  margin: auto;
  width: ${(screenWidth * 3) / 4}px;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  position: absolute;
  bottom: ${(props) => props.theme.space[4]};
`;

//container de tout le résultat sauf les boutons
const ResultContainer = styled.View`
  width: 90%;
  height: 70%;
  margin-top: ${(props) => props.theme.space[4]};
  border-radius: 10%;
  background: ${(props) => props.theme.colors.bg.secondary};
  position: absolute;
  align-items: center;
`;

//container avec le header
const ResultBanner = styled.View`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  width: 100%;
  height: 7%;
  top: ${(props) => props.theme.space[5]};
  z-index: 1;
  position: relative;
`;

//container dans lequel on vient tout mettre sauf le header et le container gris foncé
const ResultSmallContainer = styled.View`
  width: 80%;
  height: 80%;
  position: inherit;
  top: ${(props) => props.theme.space[6]};
  justify-content: center;
  flex-direction: row;
`;

//container gris qui contient les deux view du score et du texte
const ResultScoreContainer = styled.View`
  background: ${(props) => props.theme.colors.bg.tertiary};
  width: 65%;
  height: 30%;
  border-radius: 10%;
  justify-content: space-evenly;
  position: relative;
  top: ${(props) => props.theme.space[4]};
  padding-top: ${(props) => props.theme.sizes[1]};
  margin-left: auto;
  margin-right: auto;
`;

//container dans lequel on met le nom de l'user
const ScoreText = styled.Text`
  width: 90%;
  height: 40%;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.body};
  margin: auto;
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

//container avec les deux view pour bonnes et mauvaises réponses
const ResultAnswerContainer = styled.View`
  width: 100%;
  /* flex: 1; */
  height: 30%;
  justify-content: space-between;
  position: relative;
  bottom: ${(props) => props.theme.sizes[4]};
`;

const ResultAnswer = styled.View`
  background: white;
  width: 100%;
  height: 40%;
`;

const AnswerBorder = styled.View`
  margin-top: 1%;
  margin-bottom: 1%;
  height: 5%;
  background: black;
  width: 100%;
`;

const AnswerTextContainer = styled.View`
  height: 60%;
  /* background: red; */
  justify-content: center;
  flex-direction: row;
  flex: 1;
`;

const AnswerTextNumber = styled.View`
  /* background: lightblue; */
  width: 20%;
  flex: 1;
  justify-content: center;
`;

const AnswerText = styled.View`
  /* background: lightgoldenrodyellow; */
  width: 80%;
`;

const TextForAnswerNumber = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.heading};
  text-align: right;
`;

const TextForAnswerText = styled.Text`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.body};
  text-align: center;
  justify-content: center;
  margin: auto;
`;

export const ResultScreen = () => {
  return (
    <SafeArea>
      <ResultBanner>
        <H1>Résultat</H1>
      </ResultBanner>
      <ResultContainer>
        <ResultSmallContainer>
          <ImageBackground
            source={image_background}
            resizeMode="cover"
            style={styles.imgback}
          >
            <ResultScoreContainer>
              <H1 style={styles.heading}>110</H1>
              <ScoreText>score de Lorembidule</ScoreText>
            </ResultScoreContainer>
          </ImageBackground>
        </ResultSmallContainer>
        <ResultAnswerContainer>
          <ResultAnswer>
            <AnswerBorder></AnswerBorder>
            <AnswerTextContainer>
              <AnswerTextNumber>
                <TextForAnswerNumber>6</TextForAnswerNumber>
              </AnswerTextNumber>
              <AnswerText>
                <TextForAnswerText>Bonnes réponses</TextForAnswerText>
              </AnswerText>
            </AnswerTextContainer>
            <AnswerBorder></AnswerBorder>
          </ResultAnswer>
          <ResultAnswer>
            <AnswerBorder></AnswerBorder>
            <AnswerTextContainer>
              <AnswerTextNumber>
                <TextForAnswerNumber>4</TextForAnswerNumber>
              </AnswerTextNumber>
              <AnswerText>
                <TextForAnswerText>Mauvaises réponses</TextForAnswerText>
              </AnswerText>
            </AnswerTextContainer>
            <AnswerBorder></AnswerBorder>
          </ResultAnswer>
        </ResultAnswerContainer>
      </ResultContainer>

      <ButtonsContainer>
        <ButtonGradient>Menu Défis</ButtonGradient>
        <ButtonGradient>Niveau suivant</ButtonGradient>
      </ButtonsContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    textAlign: "center",
    height: "40%",
  },
  imgback: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: "97%",
  },
});
