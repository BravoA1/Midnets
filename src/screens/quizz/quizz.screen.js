import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import InsetShadow from "react-native-inset-shadow";

const Container = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[3]};
`;
const Linear = styled(LinearGradient)`
  border-radius: 50%;
  width: 100%;
`;
const TitleContainer = styled.View`
  width: 100%;
  padding-left: 5%;
  display: flex;
  align-items: start;
  justify-content: center;
`;
const Title = styled.Text``;
const QuestionContainer = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
  background-color: darkgray;
  width: 85%;
  padding: ${(props) => props.theme.space[4]};
  border-radius: 8rem;
`;
const Question = styled.Text`
  color: white;
  font-family: ${(props) => props.theme.fonts.headingBold};
  font-size: 28px;
  text-align: left;
`;
const LeftCorner = styled.View`
  margin: ${(props) => props.theme.space[3]};
  position: absolute;
  width: 75px;
  height: 75px;
  border: 3px solid white;
  border-right-color: darkgray;
  border-bottom-color: darkgray;
  border-top-left-radius: 2px;
`;
const RightCorner = styled.View`
  margin: ${(props) => props.theme.space[3]};
  position: absolute;
  right: 0;
  bottom: 0;
  width: 75px;
  height: 75px;
  border: 3px solid white;
  border-left-color: darkgray;
  border-top-color: darkgray;
`;
const ResponseContainer = styled.View``;
const Response = styled.Text``;
const MoreContainer = styled.View``;
const MoreText = styled.Text``;

export const QuizzScreen = () => {
  return (
    <Container>
      <InsetShadow
        containerStyle={styles.shadow}
        shadowRadius={10}
        shadowOpacity={20}
        bottom={false}
        left={false}
      >
        <Linear
          colors={["white", "lightgrey"]}
          locations={[0.1, 0.2]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0.5, y: 0 }}
        >
          <TitleContainer style={styles.container}>
            <Title>Quiz: les femmes</Title>
          </TitleContainer>
        </Linear>
      </InsetShadow>
      <QuestionContainer>
        <LeftCorner></LeftCorner>
        <RightCorner></RightCorner>
        <Question>Qu'a découvert Marie Curie ?</Question>
      </QuestionContainer>
      <ResponseContainer>
        <Response>Le radium</Response>
        <Response>Le cuivre</Response>
        <Response>Le curry vert</Response>
        <Response>La mimolette</Response>
      </ResponseContainer>
      <MoreContainer>
        <MoreText>En savoir plus</MoreText>
      </MoreContainer>
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
    borderRadius: "50%",
    backgroundColor: "rgb(128,128,128,1)",
  },
  shadow: {
    borderRadius: 25,
    height: 30,
    width: "85%",
  },
});
