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
  align-self: flex-end;
  text-decoration: underline;
  font-family: ${props => props.theme.fonts.body};

`;

const ButtonLog = styled.TouchableOpacity`
    flex-direction: row;    
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #000;
    background-color: #eee;
    width: 70%;
    margin-top: 30px;
    border-radius: 100px;
    box-shadow: 0px 3px 1px #999;
`

const ButtonRegister = styled.TouchableOpacity`
    width: 70%;
    margin-top: 30px;
    color: #000;
`
const TextButton = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: ${props => props.theme.fonts.headingBold};

`
const TextButtonGoogle = styled.Text`
  width: 80%;
  font-size: 15px;
  font-family: ${props => props.theme.fonts.body};

`
const GoogleIcon = styled.Image`
    width: 30px;
    height: 30px;
    margin-horizontal: 15px;
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
      <ButtonLog>
        <TextButton>Connexion</TextButton>
      </ButtonLog>
      <ButtonRegister>
        <TextButton>Inscription</TextButton>
      </ButtonRegister>
      <ButtonLog>
          <GoogleIcon source={require('../../img/Google.png')} />
          <TextButtonGoogle>Se connecter avec google</TextButtonGoogle>
      </ButtonLog>
    </SafeArea>
  );
};
