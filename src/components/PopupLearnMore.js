import { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Image, ScrollView, Text, View } from "react-native";
import InsetShadow from "react-native-inset-shadow";
import { styled } from "styled-components/native";
import { CornerBlock } from "./CornerBlock";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const screen80 = screenHeight * 0.8;

const Container = styled.View`
  position: absolute;
  width: 100%;
  height: ${screenHeight}px;
  padding: 30px 35px;
  z-index: 999;
  background-color: rgba(213, 128, 255, 0.2);
`;

const PopUp = styled.View`
  width: 100%;
  height: ${screen80}px;
  padding: 15px;
  border-radius: 20px;
  margin-top: 30px;
  background-color: rgba(69, 69, 69, 0.91);
  overflow: visible;
`;

const PopUpClose = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 30%;
  left: 100%;
  width: 50px;
  height: 50px;
  padding-top: 5px;
  background-color: white;
  border-radius: 70px;
  z-index: 999;
`;

const PopUpTitle = styled.Text`
  text-align: center;
  color: black;
  width: 118%;
  background-color: #d9d9d9;
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 10px;
  z-index: 999;
  font-family: ${(props) => props.theme.fonts.headingBold};
  font-size: 20px;
  transform: translateX(-25px);
`;

const Triangle = styled.View`
  position: absolute;
  height: 0;
  width: 0;
  border-top-width: ${screenWidth * 0.08}px;
  border-top-color: #9e9e9e;
  border-left-width: ${screenWidth * 0.027}px;
  border-left-color: transparent;
  top: 85%;
  left: -25px;
`;

const PopUpSection = styled.View`
  gap: 15px;
  padding: 10px;
  padding-right: 10px;
`;

const PopUpText = styled.Text`
  color: white;
  font-family: ${(props) => props.theme.fonts.body};
`;

// ! manque le blur effect
export const PopUpLearnMore = ({ data, setShowPopup, showPopup }) => {
  // state pour le contenu de l'article
  // ! voir la structure de l'article
  //const [text, setText] = useState(data);

  const handlePress = () => {
    setShowPopup(!showPopup);
    //console.log("close modal");
  };

  // ?  View dans le insetShadow car il veut un enfant dans son composant
  return (
    <Container>
      <PopUp>
        <InsetShadow
          containerStyle={styles.shadow}
          shadowRadius={10}
          shadowOpacity={30}
          bottom={false}
          left={false}
          right={false}
        >
          <View></View>
        </InsetShadow>
        <View>
          <PopUpTitle
            style={{
              shadowColor: "black",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.25,
              shadowRadius: 10,
              elevation: 20,
            }}
          >
            Et Aujourd'hui ?
          </PopUpTitle>
          <Triangle></Triangle>
        </View>

        <PopUpClose onPress={handlePress}>
          <Image source={require("../img/Exclude.png")} />
        </PopUpClose>
        <View style={{ flex: 1, zIndex: 300 }}>
          <CornerBlock
            size="100px"
            color="white"
            borderHorizontal="4px"
            borderVertical="4px"
          >
            <ScrollView style={{ flex: 1, padding: 2 }}>
              <PopUpSection>
                <PopUpText>
                  Lorem ipsum dolor sit amet consectetur. At potenti nec nulla
                  purus ultricies eget. Suscipit consequat amet euismod netus.
                  Netus malesuada felis viverra ullamcorper. Lobortis nibh
                </PopUpText>
                <PopUpText>
                  fermentum turpis sed. Euismod nunc consequat purus sed. Nisi
                  augue egestas diam arcu quis nunc aliquet lectus. Ut volutpat{" "}
                </PopUpText>
                <PopUpText>
                  eget diam netus dictumst. Eget donec id amet faucibus justo
                  sed urna leo faucibus volutpat sapien. Ut porta diam egestas
                  proin et elit scelerisque pretium ultricies.
                </PopUpText>
              </PopUpSection>
            </ScrollView>
          </CornerBlock>
        </View>
      </PopUp>
    </Container>
  );
};

const styles = StyleSheet.create({
  shadow: {
    position: "absolute",
    borderRadius: 20,
    height: "100%",
    width: "111%",
    zIndex: 200,
  },
});
