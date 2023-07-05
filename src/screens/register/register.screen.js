import React from "react";
import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background: lightblue;
  ${StatusBar.currentHeight && `margin-top : ${StatusBar.currentHeight}px`};
`;

const InputBlock = styled.View`
  height: ${(props) => props.theme.sizes[3]};
  justify-content: space-between;
  align-content: center;
  margin: auto;
  color: black;
  width: 350px;
`;

const Label = styled.Text`
  text-align: center;
  margin-left: ${(props) => props.theme.sizes[3]};
  text-transform: lowercase;
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

const Icon = styled.Image`
  background: grey;
  height: ${(props) => props.theme.sizes[2]};
  width: ${(props) => props.theme.sizes[2]};
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

const InputText = styled.TextInput`
  background: yellow;
  height: ${(props) => props.theme.sizes[2]};
  border-radius: 50px;
  width: 300px;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  color: black;
  padding-left: ${(props) => props.theme.sizes[1]};
`;

const Logo = styled.Image`
  width: 250px;
  height: 150px;
  margin: auto;
  resize-mode: contain;
`;

export const RegisterScreen = () => {
  const [pseudo, setPseudo] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConf, setPasswordConf] = React.useState("");

  return (
    <SafeArea>
      <Logo source={require("../../img/logo.png")} />
      <InputBlock>
        <Label>Pseudo</Label>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Icon />
          <InputText
            label="pseudo"
            value={pseudo}
            onChangeText={(pseudo) => setPseudo(pseudo)}
          />
        </View>
      </InputBlock>

      <InputBlock>
        <Label>ADRESSE MAIL</Label>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Icon />
          <InputText
            label="adresse mail"
            value={mail}
            onChangeText={(mail) => setMail(mail)}
          />
        </View>
      </InputBlock>

      <InputBlock>
        <Label>mot de passe</Label>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Icon />
          <InputText
            label="mot de passe"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
      </InputBlock>

      <InputBlock>
        <Label>confirmation du mot de passe</Label>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Icon />
          <InputText
            label="confirmation"
            value={passwordConf}
            onChangeText={(passwordConf) => setPasswordConf(passwordConf)}
          />
        </View>
      </InputBlock>
    </SafeArea>
  );
};
