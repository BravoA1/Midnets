import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import InsetShadow from "react-native-inset-shadow";
import ButtonResponse from "../../components/ButtonResponse.js";
import { QuizContext } from "../../services/quiz/quiz.context.js";

import ButtonRules from "../../components/ButtonRules.js";

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
  font-size: 28px;
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
`;
const Response = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;
const MoreContainer = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row nowrap;
`;
const MoreText = styled.Text`
  font-family: ${(props) => props.theme.fonts.headingBold};
`;

const ProgresBar = styled.View``;
const ProgresPoint = styled.View``;

export const QuizzScreen = () => {
  const { quizData, loading } = useContext(QuizContext);

  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correct, setCorrect] = useState(-1);
  const [index, setIndex] = useState();
  const [result, setResult] = useState({ one: "", two: "" });
  const [alreadyAsk, setAlreadyAsk] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState(5);
  const [score, setScore] = useState(0);
  const [buttonDisable, setButtonDisable] = useState(false);
  /* DEBUG*/
  useEffect(() => {
    console.log(question, "question");
  }, [question]);
  useEffect(() => {
    console.log(answers, "answers");
  }, [answers]);
  useEffect(() => {
    console.log(alreadyAsk, "alreadyAsk");
  }, [alreadyAsk]);
  /* DEBUG*/

  useEffect(() => {
    console.log("Reset");
    setIndex(Random());

    Reset();
  }, []);

  useEffect(() => {
    if (!loading) {
      SetQuiz();
    }
  }, [loading]);

  function Reset() {
    setScore(0);
    setNumberQuestion(5);
    setResult({ one: "", two: "" });
  }

  function SetQuiz() {
    setQuestion(quizData[index].question);
    setAnswers(quizData[index].answers);
    setCorrect(quizData[index].correct);
  }

  function Random() {
    let indexTemp;
    do {
      indexTemp = Math.floor(Math.random() * quizData.length);
      console.log(indexTemp, "indexTemp");
      console.log(index, "index");
    } while (alreadyAsk.includes(indexTemp));

    setAlreadyAsk([...alreadyAsk, indexTemp]);
    return indexTemp;
  }

  function AnswersOne() {
    if (numberQuestion > 0) {
      setButtonDisable(true);
      console.log(correct);
      if (correct === 0) {
        setResult({ one: "correct", two: "" });
        setScore(score + 1);
      } else {
        setResult({ one: "wrong", two: "correct" });
      }
      setIndex(Random());
      setTimeout(() => {
        setResult({ one: "", two: "" });
        setQuestion(quizData[index].question);
        setAnswers(quizData[index].answers);
        setCorrect(quizData[index].correct);
        setNumberQuestion(numberQuestion - 1);
        setButtonDisable(false);
      }, 2000);
    }
  }
  function AnswersTwo() {
    if (numberQuestion > 0) {
      setButtonDisable(true);
      console.log(correct);
      if (correct === 1) {
        setResult({ one: "", two: "correct" });
        setScore(score + 1);
      } else {
        setResult({ one: "correct", two: "wrong" });
      }
      setIndex(Random());
      setTimeout(() => {
        setResult({ one: "", two: "" });
        setQuestion(quizData[index].question);
        setAnswers(quizData[index].answers);
        setCorrect(quizData[index].correct);
        setNumberQuestion(numberQuestion - 1);
        setButtonDisable(false);
      }, 2000);
    }
  }

  return (
    <Container>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          style={{
            zIndex: 1,
          }}
        />
      ) : (
        <>
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
              OnPress={AnswersOne}
              Disabled={buttonDisable}
            >
              <Response>{answers[0]}</Response>
            </ButtonResponse>
            <ButtonResponse
              result={result.two}
              OnPress={AnswersTwo}
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
            <ButtonResponse>
              <MoreText>En savoir plus</MoreText>
            </ButtonResponse>
          </MoreContainer>
          {<Text>Score : {score}</Text>}
          {<Text>Question restant : {numberQuestion}</Text>}
        </>
      )}
    </Container>
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
