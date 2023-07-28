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

import ButtonResponse from "../../components/button/ButtonResponse.js";
import ButtonRules from "../../components/button/ButtonRules.js";
import InputFrom from "../../components/InputForm.js";

import { QuizContext } from "../../services/quiz/quiz.context.js";
import { PopUpLearnMore } from "../../components/PopupLearnMore.js";
import { CountDown } from "../../components/CountDown.jsx";
import { Snackbar } from "react-native-paper";
import { RulesScreen } from "./rules.screen.js";

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
const QuestionContainer = styled.ScrollView`
  margin-top: ${(props) => props.theme.space[3]};
  background-color: darkgray;
  width: 85%;
  height: 25%;
  padding: ${(props) => props.theme.space[4]};
  border-radius: 8px;
`;
const Question = styled.Text`
  color: white;
  font-family: ${(props) => props.theme.fonts.headingBold};
  font-size: 23.9px;
  text-align: left;
  padding-bottom: ${(props) => props.theme.space[4]};
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

const TimerContainer = styled.View`
  position: absolute;
  top: 35%;
  left: 80%;
  z-index: 1;
`;

export const QuizzScreen = ({ navigation, difficulty }) => {
  // Context
  const { quizDataEasy, quizDataMedium, loading } = useContext(QuizContext);
  // Question UseState
  const [index, setIndex] = useState();
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correct, setCorrect] = useState(-2);
  const [result, setResult] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });
  const [alreadyAsk, setAlreadyAsk] = useState([]);

  // For result UseState
  const QuestionNumber = difficulty > 2 ? (difficulty === 3 ? 30 : 5) : 10;
  const [numberQuestion, setNumberQuestion] = useState(QuestionNumber);
  const [score, setScore] = useState(0);

  // PopUp and Button UseState
  const [buttonDisable, setButtonDisable] = useState(false);
  const [showLearnMoreModale, setShowLearnMoreModale] = useState(false);
  const [showRuleModale, setShowRuleModale] = useState(false);
  const [visible, setVisible] = useState(false);

  // Timer UseState
  const [time, setTime] = useState(
    difficulty === 2 ? 15 : difficulty === 3 ? 30 : 20
  );
  const [pause, setPause] = useState(false);
  const [reset, setReset] = useState(true);

  // PopUp for showMore
  useEffect(() => {
    if (!showLearnMoreModale) {
      setPause(false);
    }
  }, [showLearnMoreModale]);

  // PopUp for Rule
  useEffect(() => {
    console.log(showRuleModale, " rule modale");
    if (!showRuleModale) {
      setPause(false);
    }
  }, [showRuleModale]);

  // Reset all on first render
  useEffect(() => {
    Reset();
  }, []);

  useEffect(() => {
    // Quand l'index change
    if (!loading) {
      console.log("Loading Finish");
      // Timeout reactivate button and set new Question with timer
      setTimeout(() => {
        setButtonDisable(false);
        if (difficulty === 2) {
          setTime(15);
          NewQuestion(quizDataMedium[index]);
        } else {
          setTime(20);
          NewQuestion(quizDataEasy[index]);
        }
      }, 2000);
    }
  }, [index]);

  // When loading as finish get the first question index
  useEffect(() => {
    if (!loading) {
      setIndex(Random());
    }
    console.log(loading, "loading");
  }, [loading]);

  useEffect(() => {
    // If there is not more question redirect to ResultScreen
    if (numberQuestion <= 0) {
      navigation.navigate("Result", {
        score: score,
        numberQuestion: QuestionNumber,
        difficulty: difficulty,
      });
      setPause(true);
    }
  }, [numberQuestion]);

  // Initialise the new Question
  function NewQuestion(quizData) {
    console.log(quizData);
    setQuestion(quizData.question);
    setAnswers(quizData.answers);
    setCorrect(quizData.correct);
    setReset(true);
    setResult({ one: "", two: "", three: "", four: "" });
  }

  // Reset all the parameter
  function Reset() {
    setScore(0);
    setTime(difficulty === 2 ? 15 : 20);
    setNumberQuestion(QuestionNumber);
    setAlreadyAsk([]);
    setButtonDisable(true);
    setResult({ one: "", two: "", three: "", four: "" });
  }

  // Randomize index without having the same as an old one
  function Random() {
    let indexTemp;
    do {
      indexTemp = Math.floor(
        difficulty > 1
          ? Math.random() * quizDataMedium.length
          : Math.random() * quizDataEasy.length
      );
    } while (alreadyAsk.includes(indexTemp));
    setAlreadyAsk([...alreadyAsk, indexTemp]);
    return indexTemp;
  }

  // Logic to see if answers is correct or not (it simple but very poorly optimise)
  function Answers(number) {
    console.log(number, " number");
    console.log(correct, "correct");
    if (numberQuestion > 0) {
      // To prevent user from spamming button
      setButtonDisable(true);
      switch (number) {
        // Timer case
        case -1:
          switch (correct) {
            case 0:
              setResult({ one: "correct", two: "", three: "", four: "" });
              break;
            case 1:
              setResult({ one: "", two: "correct", three: "", four: "" });
              break;
            case 2:
              setResult({ one: "", two: "", three: "correct", four: "" });
              break;
            case 3:
              setResult({ one: "", two: "", three: "", four: "correct" });
              break;
          }
          setVisible(true);
          break;
        // User case
        case 0:
          switch (correct) {
            case 0:
              setResult({ one: "correct", two: "", three: "", four: "" });
              setScore(score + 1);
              break;
            case 1:
              setResult({ one: "wrong", two: "correct", three: "", four: "" });
              break;
            case 2:
              setResult({ one: "wrong", two: "", three: "correct", four: "" });
              break;
            case 3:
              setResult({ one: "wrong", two: "", three: "", four: "correct" });
              break;
          }
          break;
        // User case
        case 1:
          switch (correct) {
            case 0:
              setResult({ one: "correct", two: "wrong", three: "", four: "" });
              break;
            case 1:
              setResult({ one: "", two: "correct", three: "", four: "" });
              setScore(score + 1);
              break;
            case 2:
              setResult({ one: "", two: "wrong", three: "correct", four: "" });
              break;
            case 3:
              setResult({ one: "", two: "wrong", three: "", four: "correct" });
              break;
          }
          break;
        // User case
        case 2:
          switch (correct) {
            case 0:
              setResult({ one: "correct", two: "", three: "wrong", four: "" });
              break;
            case 1:
              setResult({ one: "", two: "correct", three: "wrong", four: "" });
              break;
            case 2:
              setResult({ one: "", two: "", three: "correct", four: "" });
              setScore(score + 1);
              break;
            case 3:
              setResult({ one: "", two: "", three: "wrong", four: "correct" });
              break;
          }
          break;
        // User case
        case 3:
          switch (correct) {
            case 0:
              setResult({ one: "correct", two: "", three: "", four: "wrong" });
              break;
            case 1:
              setResult({ one: "", two: "correct", three: "", four: "wrong" });
              break;
            case 2:
              setResult({ one: "", two: "", three: "correct", four: "wrong" });
              break;
            case 3:
              setResult({ one: "", two: "", three: "", four: "correct" });
              setScore(score + 1);
              break;
          }
          break;
        default:
      }
      // Set a new index and change the number of question
      setIndex(Random());
      setNumberQuestion(numberQuestion - 1);
    } else {
      // Disable button to prevent error
      setButtonDisable(true);
    }
  }

  function AnswersSpecific(answersUser) {
    console.log(answers[correct].toLowerCase());
    console.log(answersUser.toLowerCase());
    if (answers[correct].toLowerCase() === answersUser.toLowerCase()) {
    }
  }

  return (
    <>
      <SafeAreaView>
        <Container>
          {loading ? (
            <View style={{ justifyContent: "center", alignItem: "center" }}>
              <ActivityIndicator
                size={"large"}
                style={{
                  zIndex: 1,
                }}
              />
            </View>
          ) : !question ? (
            <View style={{ justifyContent: "center", alignItem: "center" }}>
              <ActivityIndicator
                size={"large"}
                style={{
                  zIndex: 1,
                }}
              />
              <Text>Question en chargement</Text>
            </View>
          ) : (
            <>
              <TimerContainer>
                <CountDown
                  time={time}
                  setTime={setTime}
                  onTimeUp={() => Answers(-1)}
                  pause={pause}
                  reset={reset}
                  setReset={setReset}
                />
              </TimerContainer>
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
                    <Title>
                      {difficulty === 2
                        ? "Quiz: Mary Cury"
                        : "Quiz: les femmes"}
                    </Title>
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
              <QuestionContainer contentContainerStyle={{ paddingBottom: 30 }}>
                <Question>{question}</Question>
              </QuestionContainer>
              {/* button reponse */}
              <ResponseContainer1>
                {difficulty < 3 ? (
                  <>
                    <ButtonResponse
                      width={0.35}
                      result={result.one}
                      OnPress={() => Answers(0)}
                      Disabled={buttonDisable}
                    >
                      <Response>{answers[0]}</Response>
                    </ButtonResponse>
                    <ButtonResponse
                      width={0.35}
                      result={result.two}
                      OnPress={() => Answers(1)}
                      Disabled={buttonDisable}
                    >
                      <Response>{answers[1]}</Response>
                    </ButtonResponse>
                  </>
                ) : (
                  <InputFrom placeholder={"Answers"} type={"textBasic"} setInfo={AnswersSpecific} />
                )}
              </ResponseContainer1>
              {difficulty === 2 ? (
                <ResponseContainer2>
                  <ButtonResponse
                    width={0.35}
                    result={result.three}
                    OnPress={() => Answers(2)}
                    Disabled={buttonDisable}
                  >
                    <Response>{answers[2]}</Response>
                  </ButtonResponse>
                  <ButtonResponse
                    width={0.35}
                    result={result.four}
                    OnPress={() => Answers(3)}
                    Disabled={buttonDisable}
                  >
                    <Response>{answers[3]}</Response>
                  </ButtonResponse>
                </ResponseContainer2>
              ) : (
                <></>
              )}
              {/* barre de progression avec les petits */}
              <ProgresBar>
                <ProgresPoint
                  style={{ backgroundColor: "black" }}
                ></ProgresPoint>
                <ProgresPoint
                  style={{
                    backgroundColor:
                      numberQuestion < (QuestionNumber * 75) / 100
                        ? "black"
                        : "gray",
                  }}
                ></ProgresPoint>
                <ProgresPoint
                  style={{
                    backgroundColor:
                      numberQuestion < (QuestionNumber * 50) / 100
                        ? "black"
                        : "gray",
                  }}
                ></ProgresPoint>
                <ProgresPoint
                  style={{
                    backgroundColor:
                      numberQuestion < (QuestionNumber * 25) / 100
                        ? "black"
                        : "gray",
                  }}
                ></ProgresPoint>
                <ProgresPoint
                  style={{
                    backgroundColor:
                      numberQuestion < (QuestionNumber * 10) / 100
                        ? "black"
                        : "gray",
                  }}
                ></ProgresPoint>
              </ProgresBar>
              {/* button poour accèder aux règles */}
              <ButtonRules
                OnPress={() => {
                  setShowRuleModale(true);
                  setPause(true);
                }}
              ></ButtonRules>
              {/* en savoir plus container */}
              <MoreContainer>
                <ButtonResponse
                  width={0.5}
                  OnPress={() => {
                    setShowLearnMoreModale(true);
                    setPause(true);
                  }}
                >
                  <MoreText>En savoir plus</MoreText>
                </ButtonResponse>
              </MoreContainer>
            </>
          )}
          <Snackbar
            style={{ zIndex: 10 }}
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
        {showRuleModale && (
          <RulesScreen
            showPopup={showRuleModale}
            setShowPopup={setShowRuleModale}
            difficulty={difficulty}
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
