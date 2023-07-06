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
  width: 120%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const RegisterScreen = () => {
  const [pseudo, setPseudo] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConf, setPasswordConf] = React.useState("");

  return (
    <SafeArea>
      <Logo height={"default"} />
      <InputBlock style={{ marginTop: 50 }}>
        <InputForm type="text">pseudo</InputForm>
      </InputBlock>
      <InputBlock>
        <InputForm type="email">adresse mail</InputForm>
      </InputBlock>
      <InputBlock>
        <InputForm type="password">mot de passe</InputForm>
      </InputBlock>
      <InputBlock>
        <InputForm type="password">confirmation mot de passe</InputForm>
      </InputBlock>

      <Button title="Se connecter"></Button>
    </SafeArea>
  );
};
