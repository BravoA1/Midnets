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
import { H1 } from "../../components/theme";
import ButtonResponse from "../../components/ButtonResponse";
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
  margin-top: ${(props) => props.theme.space[5]};
`;

// const ButtonsContainer = styled.View`
//   width: 90%;
//   height: 20%;
//   bottom: ${(props) => props.theme.space[3]};
//   flex-direction: row;
//   align-items: center;
//   border: 1px solid red;
// `;

//container de tout le résultat sauf les boutons
const ResultContainer = styled.View`
  width: ${(screenWidth * 3) / 4}px;
  height: ${(screenHeight * 2) / 4}px;
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
  height: 35%;
  border-radius: 10px;
  justify-content: space-evenly;
  position: relative;
  top: -20%;
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
`;

//container dans lequel on met le nom de l'user
const ScoreText = styled.Text`
  width: 90%;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.body};
  margin: auto;
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

//container avec les deux view pour bonnes et mauvaises réponses
const ResultAnswerContainer = styled.View`
  background-color: white;
  width: ${(screenWidth * 3) / 4}px;
  position: absolute;
  top: 50%;
  margin-top: 20px;
  align-items: center;
`;

const ResultAnswerContainer1 = styled.View`
  background-color: white;
  width: ${(screenWidth * 3) / 4}px;
  position: absolute;
  top: 70%;
  margin-top: 20px;
  align-items: center;
`;

// const ResultAnswer = styled.View`
//   background: white;
//   width: 100%;
//   height: 100%;
//   position: relative;
// `;

const AnswerBorder = styled.View`
  /* margin-top: 1%;
  margin-bottom: 1%;
  height: 5%;
  background: black;
  width: 100%; */
  width: 100%;
  height: 3px;
  background: black;
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 14px;
  font-weight: 400;
`;

const AnswerTextContainer = styled.View`
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

const BlockResult = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${(screenWidth * 2) / 4}px;
`;

const Score = styled.Text`
  font-size: 24px;
  padding-right: 20px;
`;

const Result = styled.Text`
  text-align: center;
`;

const ButtonsContainer = styled.View`
  width: 90%;
  position: absolute;
  bottom: ${(props) => props.theme.space[3]};
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  border: 1px solid red;
`;

export const ResultScreen = () => {
  return (
    <SafeArea>
      <RubanCard title="Résultat">
        <ResultContainer>
          <CornerContainer>
            <CornerBlock
              size="100px"
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
            <ScorePoint>110</ScorePoint>
            <ScoreText>score de Lorembidule</ScoreText>
          </ResultScoreContainer>
        </ResultContainer>
        <ResultAnswerContainer>
          <AnswerBorder></AnswerBorder>
          <BlockResult>
            <Score>6</Score>
            <Result>BONNES REPONSES</Result>
          </BlockResult>
          <AnswerBorder></AnswerBorder>
          {/* <ResultAnswer>
            <AnswerBorder></AnswerBorder>
            <Text>Réponses</Text>
            <AnswerBorder></AnswerBorder>
          </ResultAnswer> */}
        </ResultAnswerContainer>
        <ResultAnswerContainer1>
          <AnswerBorder></AnswerBorder>
          <BlockResult>
            <Score>4</Score>
            <Result>MAUVAISES REPONSES</Result>
          </BlockResult>
          <AnswerBorder></AnswerBorder>
          {/* <ResultAnswer>
            <AnswerBorder></AnswerBorder>
            <Text>Réponses</Text>
            <AnswerBorder></AnswerBorder>
          </ResultAnswer> */}
        </ResultAnswerContainer1>
        {/* <ResultAnswerContainer>
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
        </ResultAnswerContainer> */}
      </RubanCard>
      {/* <ResultContainer></ResultContainer> */}

      {/* <ButtonsContainer>
        <View style={{ width: "45%", backgroundColor: "green" }}>
          <ButtonResponse>Menu Défis</ButtonResponse>
        </View>
        <View style={{ width: "45%", backgroundColor: "yellow" }}>
          <ButtonResponse>Niveau suivant</ButtonResponse>
        </View>
      </ButtonsContainer> */}
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
