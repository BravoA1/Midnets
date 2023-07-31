import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import ButtonResponse from "../../components/button/ButtonResponse";
import RubanCard from "../../components/RubanCard";
import { CornerBlock } from "../../components/CornerBlock";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const image_background = require("../../img/background.png");

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  margin: auto;
  width: ${(screenWidth * 3) / 4}px;
  margin-top: ${Platform.OS === "ios"
    ? (props) => props.theme.space[5]
    : (props) => props.theme.space[4]};
`;

//container de tout le résultat sauf les boutons
const ResultContainer = styled.View`
  width: ${(screenWidth * 3) / 4}px;
  height: ${(screenHeight * 7) / 12}px;
  padding: 5%;
  background: ${(props) => props.theme.colors.bg.primary};
  justify-content: center;
  align-items: center;
`;

const CornerContainer = styled.View`
  height: 100%;
  width: 100%;
  padding: 7%;
  position: absolute;
`;

//container gris qui contient les deux view du score et du texte
const ResultScoreContainer = styled.View`
  /* IOS */
  background: ${(props) => props.theme.colors.bg.tertiary};
  width: 60%;
  height: 30%;
  border-radius: 10px;
  justify-content: space-evenly;
  position: relative;
  top: -25%;
  margin-left: auto;
  margin-right: auto;
  /* Android */
  padding-bottom: ${Platform.OS === "ios"
    ? "0"
    : (props) => props.theme.sizes[1]};
`;

const ScorePoint = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-family: ${(props) => props.theme.fonts.heading};
  text-align: center;
  margin-top: ${Platform.OS === "ios"
    ? (props) => props.theme.sizes[1]
    : "0px"};
  font-size: ${Platform.OS === "ios"
    ? (props) => props.theme.fontSizes.h2
    : (props) => props.theme.fontSizes.h3};
`;

//container dans lequel on met le nom de l'user
const ScoreText = styled.Text`
  width: 90%;
  text-align: center;
  font-size: ${Platform.OS === "ios"
    ? (props) => props.theme.fontSizes.title
    : (props) => props.theme.fontSizes.body};
  margin: auto;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding-bottom: ${Platform.OS === "ios"
    ? (props) => props.theme.sizes[0]
    : "0"};
`;

//container avec les deux view pour bonnes et mauvaises réponses
const ResultAnswerContainer = styled.View`
  background-color: white;
  width: ${(screenWidth * 3) / 4}px;
  position: absolute;
  top: 43%;
  margin-top: 20px;
  align-items: center;
`;

const ResultAnswerContainer1 = styled.View`
  background-color: white;
  width: ${(screenWidth * 3) / 4}px;
  position: absolute;
  top: 57%;
  margin-top: 20px;
  align-items: center;
`;

const AnswerBorder = styled.View`
  width: 100%;
  height: 3px;
  background: black;
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 14px;
  font-weight: 400;
`;

const BlockResult = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* width: ${(screenWidth * 2) / 4}px; */
  height: ${Platform.OS === "ios"
    ? "40px"
    : // (props) => props.theme.sizes[0]
      "auto"};
`;

const AnswerTextContainer = styled.View`
  height: 60%;
  /* background: red; */
  justify-content: center;
  flex-direction: row;
  flex: 1;
  height: ${Platform.OS === "ios" ? "40px" : "auto"};
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
  font-family: ${(props) => props.theme.fonts.headingBold};
  text-align: right;
  font-size: ${Platform.OS === "ios" ? "30px" : "20px"};
`;

const TextForAnswerText = styled.Text`
  text-transform: uppercase;
  /* font-size: ${(props) => props.theme.fontSizes.body}; */
  font-family: ${(props) => props.theme.fonts.body};
  text-align: center;
  justify-content: center;
  margin: auto;
  font-size: ${Platform.OS === "ios" ? "20px" : "15px"};
`;

const ButtonView = styled.View`
  width: 50%;
  flex: 1;
  flex-direction: row;
  padding: 0px;
`;

const ButtonsContainer = styled.View`
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: ${(props) => props.theme.space[3]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ResultScreen = ({ navigation, route }) => {
  const { score, numberQuestion, difficulty } = route.params;

  return (
    <SafeArea>
      <RubanCard title="Résultat">
        <ResultContainer>
          <CornerContainer>
            <CornerBlock
              size="75px"
              color="white"
              borderHorizontal="4px"
              borderVertical="4px"
            >
              <ImageBackground
                source={image_background}
                resizeMode="cover"
                style={styles.imgback}
              ></ImageBackground>
            </CornerBlock>
          </CornerContainer>
          <ResultScoreContainer>
            <ScorePoint>{score}</ScorePoint>
            <ScoreText>score de Lorembidule</ScoreText>
          </ResultScoreContainer>
        </ResultContainer>
        <ResultAnswerContainer>
          <AnswerBorder></AnswerBorder>

          <AnswerTextContainer>
            <AnswerTextNumber>
              <TextForAnswerNumber>{score}</TextForAnswerNumber>
            </AnswerTextNumber>
            <AnswerText>
              <TextForAnswerText>Bonnes réponses</TextForAnswerText>
            </AnswerText>
          </AnswerTextContainer>
          <AnswerBorder></AnswerBorder>
        </ResultAnswerContainer>
        <ResultAnswerContainer1>
          <AnswerBorder></AnswerBorder>
          <AnswerTextContainer>
            <AnswerTextNumber>
              <TextForAnswerNumber>
                {numberQuestion - score}
              </TextForAnswerNumber>
            </AnswerTextNumber>
            <AnswerText>
              <TextForAnswerText>Mauvaises réponses</TextForAnswerText>
            </AnswerText>
          </AnswerTextContainer>

          <AnswerBorder></AnswerBorder>
        </ResultAnswerContainer1>
      </RubanCard>

      <ButtonsContainer>
        <ButtonView style={{ justifyContent: "flex-start" }}>
          <ButtonResponse
            OnPress={() => navigation.navigate("Theme")}
            width={0.35}
          >
            Menus Défis
          </ButtonResponse>
        </ButtonView>
        {difficulty < 3 ? (
          <ButtonView style={{ justifyContent: "flex-end" }}>
            <ButtonResponse
              OnPress={() =>
                navigation.navigate("Quiz", { difficulty: difficulty + 1 })
              }
              width={0.35}
            >
              Niveau suivant
            </ButtonResponse>
          </ButtonView>
        ) : (
          <></>
        )}
      </ButtonsContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  imgback: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
