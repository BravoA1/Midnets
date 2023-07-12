import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Button,
  Image,
} from "react-native";
import InputForm from "../../components/InputForm.js";
import { styled } from "styled-components";
import ButtonGradient from "../../components/ButtonGradient.js";

let screenWidth = Dimensions.get("window").width;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin: auto;
  width: ${(screenWidth * 3) / 4}px;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const TitleBlock = styled.View`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
  borderBottomWidth: 2px;
  borderTopWidth: 2px;
  padding: 10px 50px;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  font-family: ${props => props.theme.fonts.headingBold};
`;

const Logo = styled.Image`
  width: 30%;
  margin: 0 0;
  aspect-ratio: 87 / 94;
`;

const InfoForm = styled.Text`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 11px;
  font-family: ${props => props.theme.fonts.body};

`;

const InfoText = styled.Text`
  text-align: left;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 11px;
  font-family: ${props => props.theme.fonts.body};

`;


export const PasswordForgot = () => {
  return (
    <SafeArea>
      <TitleBlock>
        <Title>Mots de passe oublié</Title>
      </TitleBlock>
      <InputForm type="email" placeholder='Email' />
      <InfoForm>
        Un lien vous sera envoyé pour réinitialiser votre mot de passe à
        l’adresse mail utilisée pour l’inscription.
      </InfoForm>
      <ButtonGradient>Envoyer le mail</ButtonGradient>
      <Logo source={require("../../img/Midnets_icone.png")} />
      <InfoText>
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatu
      </InfoText>
      <InfoText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore{" "}
      </InfoText>
      <InfoText>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatu
      </InfoText>
    </SafeArea>
  );
};
