import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Image } from "react-native";
import { styled } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TitleRuban from "../../components/TitleRuban";

let screenWidth = Dimensions.get("window").width;

const Container = styled.View`
  flex: 1;
  height: 100%;
`;

const bg = require("../../img/background.png");

const BgContainer = styled.View`
  position: absolute;
  top: 50%;
  flex: 1;
  margin: auto;
  border: red 1px solid;
  height: 50%;
`;

const Background = styled.Image`
  height: 100%;
  /* height: auto; */
`;

const Scrollable = styled.ScrollView`
  flex: 1;
  width: 100%;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  width: ${(screenWidth * 3) / 4}px;
  margin: auto;
`;

export const RulesScreen = ({ navigation }) => {
  return (
    <Container>
      <BgContainer>
        <Background source={bg} />
      </BgContainer>
      <Scrollable>
        <TitleRuban />
      </Scrollable>
    </Container>
  );
};
