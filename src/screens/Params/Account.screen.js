import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { styled } from "styled-components/native";
import InputForm from "../../components/InputForm";
import ButtonDefault from "../../components/button/ButtonDefault";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ButtonGradientGray from "../../components/button/ButtonGradientGray";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin: auto;
  width: ${(screenWidth * 3) / 4}px;
`;
const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  margin: auto;
  width: ${(screenWidth * 3) / 4}px;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Scrollable = styled.ScrollView`
  width: 100%;
  margin: auto;
  height: 100%;
`;

const ViewTitleContainer = styled.View`
  margin-top: 10%;
  margin-bottom: 10%;
  height: 100px;
  justify-content: center;
`;
const TextTitle = styled.Text`
  font-size: ${screenWidth < "390" ? "26px" : "32px"};
  font-family: ${(props) => props.theme.fonts.headingBold};
  text-align: center;
`;

const ViewBannerContainer = styled.View`
  width: ${screenWidth}px;
  align-items: center;
  background-color: white;
`;
const ViewBanner = styled.View`
  width: ${(screenWidth * 3) / 4}px;
  height: 50px;
  justify-content: center;
`;
const TextBanner = styled.Text`
  font-family: ${(props) => props.theme.fonts.headingBold};
  font-size: ${screenWidth < "390" ? "15px" : (props) => props.theme.sizes[1]};
  margin-left: 3%;
`;

const ViewFieldContainer = styled.View`
  width: 100%;
  justify-content: center;
  flex: 0.25;
  padding-top: 5%;
  /* border: 1px solid red; */
`;

const ViewConfirmPWContainer = styled.View`
  /* background: lightgreen; */
`;

const TextTitleField = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: 5%;
`;

const ViewPseudo = styled.View`
  background: ${(props) => props.theme.colors.bg.tertiary};
  padding: 2% 4%;
  align-self: flex-start;
  border-color: ${(props) => props.theme.colors.bg.secondary};
  margin: auto;
  border-radius: 20px;
`;

const ViewPassword = styled.View`
  align-self: flex-start;
  border-color: ${(props) => props.theme.colors.bg.secondary};
  margin: auto;
`;

const TextPseudo = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const InputBlock = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ViewButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin: auto;
  padding: 5%;
`;

const BgImg = styled.Image`
  z-index: -1;
  position: absolute;
  top: 0;
  opacity: 0.4;
`;

const ViewBannerByMike = styled.View`
  width: ${(screenWidth * 3) / 4}px;
  height: 50px;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const ViewFirstTitle = styled.View`
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const AccountScreen = () => {
  return (
    <>
      <Scrollable>
        <SafeArea>
          <ViewTitleContainer style={styles.TitleContainer}>
            <TextTitle>Paramètres</TextTitle>
          </ViewTitleContainer>
        </SafeArea>
        <ViewBannerContainer style={styles.banner}>
          <ViewBannerByMike>
            <ViewFirstTitle>
              <FontAwesome5 name="certificate" size={18} color="#9275B2" />
              <TextBanner>Mon compte</TextBanner>
            </ViewFirstTitle>
            <TouchableOpacity>
              <Entypo name="pencil" size={24} color="black" />
            </TouchableOpacity>
          </ViewBannerByMike>
        </ViewBannerContainer>
        <SafeAreaContainer>
          <ViewFieldContainer>
            <TextTitleField>Pseudo</TextTitleField>
            <ViewPseudo style={styles.border}>
              <TextPseudo>Lorembiquette2</TextPseudo>
            </ViewPseudo>
          </ViewFieldContainer>

          <ViewFieldContainer>
            <TextTitleField>Mot de passe actuel</TextTitleField>
            <ViewPassword>
              <TextPseudo>*********</TextPseudo>
            </ViewPassword>
          </ViewFieldContainer>

          <ViewFieldContainer>
            <TextTitleField>Nouveau mot de passe</TextTitleField>
            <InputBlock>
              {/* changer les données de l'input form */}
              <InputForm
                type="password"
                placeholder="**********"
                setInfo="null"
                info="null"
                error="null"
                errorTime="null"
              ></InputForm>
            </InputBlock>
          </ViewFieldContainer>
          <ViewConfirmPWContainer>
            <TextTitleField>Confirmation du mot de passe</TextTitleField>
            <InputBlock>
              {/* changer les données de l'input form */}
              <InputForm
                type="password"
                placeholder="**********"
                setInfo="null"
                info="null"
                error="null"
                errorTime="null"
              ></InputForm>
            </InputBlock>
          </ViewConfirmPWContainer>
          <ViewButtonContainer>
            <ButtonDefault>Confirmer</ButtonDefault>
            <ButtonGradientGray>Annuler</ButtonGradientGray>
          </ViewButtonContainer>
        </SafeAreaContainer>
      </Scrollable>
      <BgImg source={require("../../img/account_bg.png")} />
    </>
  );
};

const styles = StyleSheet.create({
  TitleContainer: {
    borderWidth: 1,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  banner: {
    borderWidth: 1,
    borderLeftColor: "white",
    borderRightColor: "white",
  },
  border: {
    borderWidth: 2,
    // borderRadius: "20px",
    // borderColor: "red",
  },
});
