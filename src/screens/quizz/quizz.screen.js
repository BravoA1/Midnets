import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import InsetShadow from "react-native-inset-shadow";
import ButtonResponse from "../../components/ButtonResponse.js";

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
          colors={["#D8C2EF", "rgba(255,255,255,0)"]}
          locations={[1, 0]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <TitleContainer style={styles.container}>
            <Title>Quiz: les femmes</Title>
          </TitleContainer>
        </Linear>
      </InsetShadow>
      <View style={styles.img}></View>
      <QuestionContainer>
        <LeftCorner></LeftCorner>
        <RightCorner></RightCorner>
        <Question>Qu'a découvert Marie Curie ?</Question>
      </QuestionContainer>
      <ResponseContainer1>
        <ButtonResponse>
          <Response>Le radium</Response>
        </ButtonResponse>
        <ButtonResponse>
          <Response>Le cuivre</Response>
        </ButtonResponse>
      </ResponseContainer1>
      <ResponseContainer2>
        <ButtonResponse>
          <Response>Le curry vert</Response>
        </ButtonResponse>
        <ButtonResponse>
          <Response>La mimolette</Response>
        </ButtonResponse>
      </ResponseContainer2>
      <MoreContainer>
        <ButtonResponse>
          <MoreText>En savoir plus</MoreText>
        </ButtonResponse>
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
  img: {
    backgroundColor: "lightgray",
    width: "85%",
    height: "20%",
    marginTop: 16,
  },
});
