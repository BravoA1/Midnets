import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Button,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import Logo from "../../components/Logo";
import InputForm from "../../components/InputForm.js";

let screenWidth = Dimensions.get("window").width;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  margin: auto;
  width: ${(screenWidth * 3) / 4}px;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const InputBlock = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
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
`;

const GoogleIcon = styled.Image`
  width: 30px;
  height: 30px;
  margin-horizontal: 15px;
`;

const TextButtonGoogle = styled.Text`
  width: 80%;
  font-size: 15px;
  font-family: ${(props) => props.theme.fonts.body};
`;

const ButtonRegister = styled.TouchableOpacity`
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
`;

const TextButton = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.headingBold};
`;

r  const [pseudo, setPseudo] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConf, setPasswordConf] = React.useState("");

  return (
    <SafeArea>
      <Logo height={75} />
      <InputBlock style={{ marginTop: 50 }}>
        <InputForm type="text" placeholder="pseudo">
          pseudo
        </InputForm>
      </InputBlock>
      <InputBlock>
        <InputForm type="email" placeholder="email">
          adresse mail
        </InputForm>
      </InputBlock>
      <InputBlock>
        <InputForm type="password" placeholder="mot de passe">
          mot de passe
        </InputForm>
      </InputBlock>
      <InputBlock>
        <InputForm type="password" placeholder="confirmer le mot de passe">
          confirmation mot de passe
        </InputForm>
      </InputBlock>
      <ButtonRegister>
        <TextButton>S'inscrire</TextButton>
      </ButtonRegister>
      <ButtonLog>
        <GoogleIcon source={require("../../img/Google.png")} />
        <TextButtonGoogle>S'inscrire avec google</TextButtonGoogle>
      </ButtonLog>
    </SafeArea>
  );
};
