import { StatusBar } from "expo-status-bar";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { styled } from "styled-components/native";
import RubanCard from "../../components/RubanCard";
import ButtonGradient from "../../components/ButtonGradient";
import ButtonResponse from "../../components/ButtonResponse";

const screenWidth = Dimensions.get("window").width;

const Container = styled.SafeAreaView`
  position: absolute;
  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: white;
`;

const bg = require("../../img/background.png");

const BgContainer = styled.View`
  position: absolute;
  top: 25%;
  z-index: 50;
  flex: 1;
  margin: auto;
  height: 50%;
  width: 100%;
`;

const Background = styled.Image`
  height: 100%;
  width: 150%;
  z-index: -1;
  opacity: 0.4;
`;

const Scrollable = styled.ScrollView`
  margin-top: 20px;
  flex: 1;
  z-index: 200;
  width: 100%;
  height: 100%;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;

const Content = styled.View`
  height: 100%;
  justify-content: space-between;
`;

const List = styled.View`
  background-color: white;
  width: ${(screenWidth * 3) / 4}px;
  justify-content: center;
`;

const Line = styled.View`
  background-color: black;
  margin-vertical: 20px;
  height: 3px;
`;

const Ul = styled.FlatList`
  padding-horizontal: 20px;
`;

const Rule = styled.Text`
  padding: 20px;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;
`;

const Btn = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const RulesScreen = ({
  navigation,
  setShowPopup,
  showPopup,
  difficulty,
}) => {
  const handlePress = () => {
    setShowPopup(!showPopup);
    //console.log("close modal");
  };

  const text = {
    question: difficulty ? (difficulty > 1 ? "10" : "5") : "10",
    time: difficulty
      ? difficulty > 1
        ? difficulty > 2
          ? "30"
          : "15"
        : "20"
      : "20",
    type: difficulty
      ? difficulty > 2
        ? " ou vous devez remplir l'input"
        : " en QCM"
      : "",
  };

  return (
    <Container>
      <BgContainer>
        <Background source={bg} />
      </BgContainer>
      <Scrollable>
        <RubanCard title={"Règles du Jeu"}>
          <List>
            <Line></Line>
            <Ul
              data={[
                { key: `Une série de ${text.question} questions ${text.type}` },
                {
                  key: `${text.time} secondes pour répondre à chaque question`,
                },
                { key: "Tentez d'améliorer votre score" },
              ]}
              renderItem={({ item }) => (
                <Rule style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Rule>
              )}
            />
            <Line></Line>
          </List>
        </RubanCard>

        <Btn>
          <ButtonGradient OnPress={handlePress}>Continuer</ButtonGradient>
        </Btn>
      </Scrollable>
    </Container>
  );
};
