import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import InsetShadow from "react-native-inset-shadow";
import ButtonResponse from "../../components/ButtonResponse.js";
import { QuizContext } from "../../services/quiz/quiz.context.js";

import ButtonRules from "../../components/ButtonRules.js";
import { PopUpLearnMore } from "../../components/PopupLearnMore.js";
import { CountDown } from "../../components/CountDown.jsx";
import { Snackbar } from "react-native-paper";

const Container = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[3]};
`;
const Linear = styled(LinearGradient)`
  width: 100%;
`;
const TitleContainer = styled.View`
  width: 100%;
  padding-left: 5%;
  display: flex;
  align-items: flex-start;
  align-items: flex-start;
  justify-content: center;
`;
const Title = styled.Text``;
const QuestionContainer = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
  background-color: darkgray;
  width: 85%;
  padding: ${(props) => props.theme.space[4]};
  border-radius: 8px;
`;
const Question = styled.Text`
  color: white;
  font-family: ${(props) => props.theme.fonts.headingBold};
  font-size: 23.9px;
  text-align: left;
`;
const ResponseContainer1 = styled.View`
  margin-top: ${(props) => props.theme.space[4]};
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: row nowrap;
`;
const ResponseContainer2 = styled.View`
  width: 85%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row nowrap;
  margin-bottom: ${(props) => props.theme.space[2]};
`;
const Response = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;
const MoreContainer = styled.View`
  margin-top: ${(props) => props.theme.space[4]};
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row nowrap;
`;
const MoreText = styled.Text`
  font-family: ${(props) => props.theme.fonts.headingBold};
`;

const ProgresBar = styled.View`
  width: 65%;
  height: 2%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const ProgresPoint = styled.View`
  width: 5%;
  height: 100%;
  background-color: gray;
  border-radius: 20px;
  margin-left: 2%;
  margin-right: 2%;
`;

export const QuizzScreen = () => {
  const { quizData, loading } = useContext(QuizContext);

  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correct, setCorrect] = useState(-2);
  const [index, setIndex] = useState();
  const [result, setResult] = useState({ one: "", two: "" });
  const [alreadyAsk, setAlreadyAsk] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState(5);
  const [score, setScore] = useState(0);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [showLearnMoreModale, setShowLearnMoreModale] = useState(false);
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(10);
  const [pause, setPause] = useState(false);
  const [reset, setReset] = useState(true);

  /* DEBUG*/
  // useEffect(() => {
  //   console.log(question, "question");
  // }, [question]);
  // useEffect(() => {
  //   console.log(answers, "answers");
  // }, [answers]);
  // useEffect(() => {
  //   console.log(alreadyAsk, "alreadyAsk");
  // }, [alreadyAsk]);
  /* DEBUG*/

  useEffect(() => {
    if (!showLearnMoreModale) {
      setPause(false);
    }
  }, [showLearnMoreModale]);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setQuestion(quizData[index].question);
        setAnswers(quizData[index].answers);
        setCorrect(quizData[index].correct);
        setResult({ one: "", two: "" });
        setButtonDisable(false);
      }, 2000);
    }
  }, [index]);

  useEffect(() => {
    Reset();
  }, []);

  useEffect(() => {
    if (!loading) {
      setIndex(Random());
    }
    console.log(loading);
  }, [loading]);

  function Reset() {
    setScore(0);
    setNumberQuestion(5);
    setAlreadyAsk([]);
    setResult({ one: "", two: "" });
  }

  function Random() {
    let indexTemp;
    do {
      indexTemp = Math.floor(Math.random() * quizData.length);
    } while (alreadyAsk.includes(indexTemp));
    setAlreadyAsk([...alreadyAsk, indexTemp]);
    return indexTemp;
  }

  function Answers(number) {
    console.log(number);
    console.log(correct);
    if (numberQuestion > 0) {
      setButtonDisable(true);
      console.log(correct);
      switch (number) {
        case -1:
          if (numberQuestion > 0) {
            if (correct === 0) {
              setResult({ one: "correct", two: "" });
            } else {
              setResult({ one: "", two: "correct" });
            }
            setVisible(true);
            setTime(10);
            setReset(true);
          }
          break;
        case 0:
          if (correct === number) {
            setResult({ one: "correct", two: "" });
            setScore(score + 1);
          } else {
            setResult({ one: "wrong", two: "correct" });
          }
          break;
        case 1:
          if (correct === number) {
            setResult({ one: "", two: "correct" });
            setScore(score + 1);
          } else {
            setResult({ one: "correct", two: "wrong" });
          }
          break;
        default:
      }
      if (correct === 0 && correct === number) {
        setResult({ one: "correct", two: "" });
        setScore(score + 1);
      } else if (correct === 0 && correct !== number) {
        setResult({ one: "correct", two: "wrong" });
      } else if (correct === 1 && correct === number) {
        setResult({ one: "", two: "correct" });
        setScore(score + 1);
      } else {
        setResult({ one: "wrong", two: "correct" });
      }
      setIndex(Random());
      setNumberQuestion(numberQuestion - 1);
    }
  }

  return (
    <>
      <SafeAreaView>
        <Container>
          {loading ? (
            <ActivityIndicator
              size={"large"}
              style={{
                zIndex: 1,
              }}
            />
          ) : !question ? (
            <>
              <ActivityIndicator
                size={"large"}
                style={{
                  zIndex: 1,
                }}
              />
              <Text>Pas de question</Text>
            </>
          ) : (
            <>
              <CountDown
                time={time}
                setTime={setTime}
                onTimeUp={() => Answers(-1)}
                pause={pause}
                reset={reset}
                setReset={setReset}
              />
              <InsetShadow
                containerStyle={styles.shadow}
                shadowRadius={10}
                shadowOpacity={20}
                bottom={false}
                left={false}
              >
                <Linear
                  colors={["#D8C2EF", "rgba(255,255,255,0)"]}
                  locations={[0, 1]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                >
                  <TitleContainer style={styles.container}>
                    <Title>Quiz: les femmes</Title>
                  </TitleContainer>
                </Linear>
              </InsetShadow>
              <View style={styles.imgContainer}>
                <Image
                  source={require("../../img/quizzMarieCurie.jpg")}
                  style={styles.img}
                />
              </View>
              {/* View qui contient la question */}
              <QuestionContainer>
                <Question>{question}</Question>
              </QuestionContainer>
              {/* button reponse */}
              <ResponseContainer1>
                <ButtonResponse
                  result={result.one}
                  OnPress={() => Answers(0)}
                  Disabled={buttonDisable}
                >
                  <Response>{answers[0]}</Response>
                </ButtonResponse>
                <ButtonResponse
                  result={result.two}
                  OnPress={() => Answers(1)}
                  Disabled={buttonDisable}
                >
                  <Response>{answers[1]}</Response>
                </ButtonResponse>
              </ResponseContainer1>
              {/* <ResponseContainer2>
        <ButtonResponse>
        <Response>Le curry vert</Response>
        </ButtonResponse>
        <ButtonResponse>
        <Response>La mimolette</Response>
        </ButtonResponse>
      </ResponseContainer2> */}
              {/* barre de progression avec les petits */}
              <ProgresBar>
                <ProgresPoint></ProgresPoint>
                <ProgresPoint></ProgresPoint>
                <ProgresPoint></ProgresPoint>
                <ProgresPoint></ProgresPoint>
                <ProgresPoint></ProgresPoint>
                <ProgresPoint></ProgresPoint>
                <ProgresPoint></ProgresPoint>
              </ProgresBar>
              {/* button poour accèder aux règles */}
              <ButtonRules></ButtonRules>
              {/* en savoir plus container */}
              <MoreContainer>
                <ButtonResponse
                  OnPress={() => {
                    setShowLearnMoreModale(true), setPause(true);
                  }}
                >
                  <MoreText>En savoir plus</MoreText>
                </ButtonResponse>
              </MoreContainer>
              {<Text>Score : {score}</Text>}
              {<Text>Question restant : {numberQuestion}</Text>}
            </>
          )}
          <Snackbar
            visible={visible}
            onDismiss={() => setVisible(false)}
            duration={1500}
          >
            Time up !
          </Snackbar>
        </Container>
        {showLearnMoreModale && (
          <PopUpLearnMore
            showPopup={showLearnMoreModale}
            setShowPopup={setShowLearnMoreModale}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    // borderRadius: "50%",
    // borderRadius: "50%",
    backgroundColor: "rgb(128,128,128,1)",
  },
  shadow: {
    borderRadius: 25,
    height: 30,
    width: "85%",
  },
  imgContainer: {
    backgroundColor: "lightgray",
    width: "85%",
    height: "20%",
    marginTop: 16,
    borderRadius: 8,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});
