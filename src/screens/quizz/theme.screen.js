import Slider from "@react-native-community/slider";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Image } from "react-native";
import { styled } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { TitleBlock } from "../../components/TitleBlock";

let screenWidth = Dimensions.get("window").width;

const Scrollable = styled.ScrollView`
  flex: 1;
  width: 100%;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  margin: auto;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Background = styled.Image`
  position: absolute;
  top: 0;
`;

const Border = styled.View`
  align-items: center;
  border-bottom-width: 2px;
  border-top-width: 2px;
  width: 100%;
  background-color: white;
`;

const ParameterBlock = styled.View`
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: ${(screenWidth * 3) / 4}px;
`;

const Parameter = styled.Text`
  text-align: left;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.headingBold};
  width: 100%;
`;

const SliderBlock = styled.View`
  width: ${(screenWidth * 2) / 4}px;
  justify-content: center;
  flex-direction: column;
  height: 100px;
`;

const Modes = styled.View`
  width: ${(screenWidth * 2) / 4}px;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 5px;
`;

const SliderBox = styled.View`
  background-color: gray;
  border-radius: 25px;
`;

const Mode = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const Select = styled.View`
  width: ${(screenWidth * 3) / 4}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const Touche = styled.TouchableOpacity`
  width: 45%;
  height: 100px;
  margin-top: 3%;
  margin-bottom: 5%;
`;

const OptionTitle = styled.Text`
  font-size: 16px;
  background-color: lightgray;
  margin-right: auto;
  text-align: left;
  position: relative;
  top: 0;
  left: -10px;
  padding-horizontal: 10px;
  z-index: 1;
  height: 21px;
`;

const Triangle = styled.View`
  position: relative;
  height: 0;
  width: 0;
  border-top-width: 20px;
  border-top-color: gray;
  border-left-width: 20px;
  border-left-color: transparent;
  left: -10px;
`;

const img1 = require("../../img/quiz/img1.jpg");
const img2 = require("../../img/quiz/img2.jpg");
const img3 = require("../../img/quiz/img3.jpg");
const img4 = require("../../img/quiz/img4.jpg");
const img5 = require("../../img/quiz/img5.jpg");
const img6 = require("../../img/quiz/img6.jpg");
const bg = require("../../img/background2.png");

const Tab = createBottomTabNavigator();

export const ThemeScreen = ({ navigation }) => {
  const [value, setValue] = useState(1);

  function handleChange(value) {
    setValue(value);
  }

  const navigateToQuizz = () => {
    navigation.navigate("Quiz", { difficulty: value });
  };

  return (
    <Scrollable>
      <Container>
        <Background source={bg} />
        <TitleBlock title="Défis" />

        <Border>
          <ParameterBlock>
            <Parameter>Choisissez la difficulté :</Parameter>
          </ParameterBlock>
        </Border>

        <SliderBlock>
          <Modes>
            <Mode>easy</Mode>
            <Mode>medium</Mode>
            <Mode>hard</Mode>
          </Modes>
          <SliderBox>
            <Slider
              minimumValue={1}
              maximumValue={3}
              step={1}
              onValueChange={handleChange}
              value={value}
              thumbTintColor={"white"}
              minimumTrackTintColor={"gray"}
              maximumTrackTintColor={"gray"}
              style={{ height: 20 }}
            />
          </SliderBox>
        </SliderBlock>
        <Border>
          <ParameterBlock>
            <Parameter>Choisissez une thématique :</Parameter>
          </ParameterBlock>
        </Border>

        <Select>
          <Touche onPress={navigateToQuizz}>
            <OptionTitle>Art</OptionTitle>
            <Triangle></Triangle>
            <Image source={img1} style={styles.image} />
          </Touche>
          <Touche onPress={navigateToQuizz}>
            <OptionTitle>Littérature</OptionTitle>
            <Triangle></Triangle>
            <Image source={img2} style={styles.image} />
          </Touche>
          <Touche onPress={navigateToQuizz}>
            <OptionTitle>Musique</OptionTitle>
            <Triangle></Triangle>
            <Image source={img3} style={styles.image} />
          </Touche>
          <Touche onPress={navigateToQuizz}>
            <OptionTitle>Ingéniérie</OptionTitle>
            <Triangle></Triangle>
            <Image source={img4} style={styles.image} />
          </Touche>
          <Touche onPress={navigateToQuizz}>
            <OptionTitle>Sciences</OptionTitle>
            <Triangle></Triangle>
            <Image source={img5} style={styles.image} />
          </Touche>
          <Touche onPress={navigateToQuizz}>
            <OptionTitle>Photographie</OptionTitle>
            <Triangle></Triangle>
            <Image source={img6} style={styles.image} />
          </Touche>
        </Select>
      </Container>
    </Scrollable>
  );
};

// Dans un soucis de design, 
// styled bloque l'usage de "resizeMode"
const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: "100%",
    height: "80%",
    resizeMode: "cover",
    position: "absolute",
    top: 21,
  },
});
