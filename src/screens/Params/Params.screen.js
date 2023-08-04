import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { styled } from "styled-components/native";
import ButtonGradientGray from "../../components/button/ButtonGradientGray.js";
import { AccessibilityOption } from "../options/accessibilityOption.component.js";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ButtonGradientQuiz } from "../../components/button/ButtonGradientQuiz.js";
import ButtonDefault from "../../components/button/ButtonDefault.js";
import { TopNavigation } from "../../components/topNavigation.js";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const Params = ({ navigation }) => {
  const [option0, setOption0] = useState(false);

  return (
    <>
      <TopNavigation navigation={navigation} />
      <Container>
        <SafeArea>
          <ViewTitleContainer style={styles.TitleContainer}>
            <TextTitle>Paramètres</TextTitle>
          </ViewTitleContainer>
        </SafeArea>
        {/* bandeau du titre */}
        <ViewBannerContainer style={styles.banner}>
          <ViewBanner>
            <ViewFirstTitle>
              <FontAwesome5 name="certificate" size={18} color="#9275B2" />
              <TextBanner>Mon compte</TextBanner>
            </ViewFirstTitle>
            <TouchableOpacity onPress={() => navigation.navigate("Account")}>
              <Entypo name="pencil" size={24} color="black" />
            </TouchableOpacity>
          </ViewBanner>
        </ViewBannerContainer>
        {/* mon compte */}
        <SafeArea>
          <ViewCompteContainer>
            <ViewPasswordContainer>
              <TextPassword>Pseudo</TextPassword>
              <TextPasswordContent>Lorembiquette2</TextPasswordContent>
            </ViewPasswordContainer>
            <ViewPasswordContainer>
              <TextPassword>Mot de passe</TextPassword>
              <TextPasswordContent>**********</TextPasswordContent>
            </ViewPasswordContainer>
            <ViewButtonContainer>
              {/* button gradiant rose */}
              <ButtonDefault>Déconnecter</ButtonDefault>
              {/* button gradiant gris */}
              <ButtonGradientGray>
                <Text>Supprimer compte</Text>
              </ButtonGradientGray>
            </ViewButtonContainer>
          </ViewCompteContainer>
        </SafeArea>
        {/* bandeau du titre */}
        <ViewBannerContainer style={styles.banner}>
          <ViewBanner>
            <ViewFirstTitle>
              <Ionicons name="options" size={24} color="black" />
              <TextBanner>Préférences</TextBanner>
            </ViewFirstTitle>
          </ViewBanner>
        </ViewBannerContainer>
        {/* Préférence */}
        <SafeArea>
          <ViewPrefContainer>
            {/* cette view contient un button */}
            <ButtonDefault onPress={() => navigation.navigate("Accessibility")}>
              Accessibilité
            </ButtonDefault>
            {/* contient intitulé et checkbox */}
            <ViewOptionContainer>
              <TextPassword1>Notifications</TextPassword1>
              {/* ajouter le check ici */}
              <AccessibilityOption state={option0} setState={setOption0} />
            </ViewOptionContainer>
          </ViewPrefContainer>
        </SafeArea>
        {/* bandeau du titre */}
        <ViewBannerContainer style={styles.banner}>
          <ViewBanner>
            <ViewFirstTitle>
              <Entypo name="info-with-circle" size={18} color="#9275B2" />
              <TextBanner>Plus d'informations</TextBanner>
            </ViewFirstTitle>
          </ViewBanner>
        </ViewBannerContainer>
        {/* Plus d'info */}
        <SafeArea>
          <ViewMoreInfo>
            <TextInfo>CGU</TextInfo>
            <TextInfo>Mentions légales</TextInfo>
            <TextInfo>Signaler un bug</TextInfo>
          </ViewMoreInfo>
        </SafeArea>
      </Container>
      <ImageBackground source={require("../../img/Plan_de_travail_4.png")} />
    </>
  );
};

// style
const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin: auto;
  width: ${(screenWidth * 3) / 4}px;
`;
const Container = styled.ScrollView`
  width: 100%;
  height: 150%;
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;
// title parametres
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
// bannière
const ViewBannerContainer = styled.View`
  width: ${screenWidth}px;
  align-items: center;
  background-color: white;
  margin-bottom: 40px;
`;
const ViewBanner = styled.View`
  width: ${(screenWidth * 3) / 4}px;
  height: 50px;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;
const TextBanner = styled.Text`
  font-family: ${(props) => props.theme.fonts.headingBold};
  font-size: ${screenWidth < "390" ? "15px" : (props) => props.theme.sizes[1]};
  margin-left: 3%;
`;
//Premiere banniere
const ViewFirstTitle = styled.View`
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;
// mon compte
const ViewCompteContainer = styled.Text`
  height: ${(screenHeight * 1) / 3.5}px;
  width: 100%;
`;
const ViewPasswordContainer = styled.View`
  width: ${(screenWidth * 3) / 4}px;
  height: 12%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TextPassword = styled.Text`
  font-family: ${(props) => props.theme.fonts.headingBold};
  font-size: ${screenWidth < "390" ? "14px" : "16px"};
`;
const TextPassword1 = styled.Text`
  font-family: ${(props) => props.theme.fonts.headingBold};
  font-size: ${screenWidth < "390" ? "14px" : "16px"};
  margin-bottom: 5%;
`;
const TextPasswordContent = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${screenWidth < "390" ? "11px" : "13px"};
`;
// button mon compte
const ViewButtonContainer = styled.View`
  padding-top: 20px;
  height: ${(screenHeight * 1) / 5}px;
  width: ${(screenWidth * 3) / 4}px;
  align-items: center;
  justify-content: space-evenly;
`;
// préférences
const ViewPrefContainer = styled.View`
  height: ${(screenHeight * 1) / 5.5}px;
  width: 100%;
  align-items: center;
`;
// button option
const ViewOptionContainer = styled.View`
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
`;
// plus d'info
const ViewMoreInfo = styled.View`
  height: ${(screenHeight * 1) / 7}px;
`;

const TextInfo = styled.Text`
  color: gray;
  text-decoration: underline gray;
`;
//image background
const ImageBackground = styled.Image`
  z-index: -1;
  position: absolute;
  top: 0;
  opacity: 0.4;
`;

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
});

export default Params;
