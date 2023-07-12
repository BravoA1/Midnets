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
import Logo from "../../components/Logo.js";
import ButtonGradient from "../../components/ButtonGradient.js";
import ButtonGoogle from "../../components/ButtonGoogle.js";

let screenWidth = Dimensions.get("window").width;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  margin: auto;
  width: ${(screenWidth * 3) / 4}px;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SpacerBottom = styled.View`
  margin-bottom: 30px;
`
const SpacerTop = styled.View`
  margin-top: 40px;
`

const ForgotPassword = styled.Text`
  margin-top: -10px;
  margin-bottom: 25px;
  align-self: flex-end;
  text-decoration: underline;
  font-family: ${props => props.theme.fonts.body};

`;

const ButtonRegister = styled.TouchableOpacity`
    width: 70%;
    margin-bottom: 30px;
    color: #000;
`
const TextButton = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: ${props => props.theme.fonts.headingBold};

`

export const Login = ({ navigation }) => {
  return (
    <SafeArea>
      <SpacerBottom />
      <Logo height={75}/>
      <SpacerTop />
      <InputForm type="email" placeholder='Email'>adresse mail</InputForm>
      <InputForm type="password" placeholder='Mots de passe'>mots de passe</InputForm>
      <ForgotPassword>mot de passe oublié ?</ForgotPassword>
      <ButtonGradient>Connexion</ButtonGradient>
      <ButtonRegister>
        <TextButton>Inscription</TextButton>
      </ButtonRegister>
      <ButtonGoogle>Se connecter avec google</ButtonGoogle>
    </SafeArea>
  );
};
