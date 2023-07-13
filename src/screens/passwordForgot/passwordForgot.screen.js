import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Button,
  Image,
  Vibration,
} from "react-native";
import { useState } from "react";
import InputForm from "../../components/InputForm.js";
import { styled } from "styled-components/native";
import ButtonGradient from "../../components/ButtonGradient.js";
import { firebase } from "../../../config";
import { Snackbar } from "react-native-paper";

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
  border-bottom-width: 2px;
  border-top-width: 2px;
  padding: 10px 50px;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  font-family: ${(props) => props.theme.fonts.headingBold};
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
  font-family: ${(props) => props.theme.fonts.body};
`;

const InfoText = styled.Text`
  text-align: left;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 11px;
  font-family: ${(props) => props.theme.fonts.body};
`;

export const PasswordForgot = () => {
  const [info, setInfo] = useState({ email: "" });
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorTimeEmail, setErrorTimeEmail] = useState(false);

  function VibrateReset(...argument) {
    setVisible(true);
    Vibration.vibrate([200, 200, 200, 200]);
    setInfo(() => {
      let newObject = info;
      if (argument.length > 1) {
        argument.map((a) => {
          newObject[a] = "";
        });
      } else {
        newObject[argument] = "";
      }
      return newObject;
    });
  }

  function resetTimeout(setErrorTime, timer) {
    setErrorTime(true);
    setTimeout(() => {
      setErrorTime(false);
    }, timer);
  }

  // Verify that all the input are valid
  function VerifyConnexion() {
    let error = false;
    console.log(info);
    // Reset all the state
    setVisible(false);
    setErrorMessage("");
    setErrorEmail(false);
    // All the condition it hurt to watch
    if (info.email.trim() == "") {
      setErrorEmail(true);
      setErrorMessage("All field must be fill");
      VibrateReset("email");
      resetTimeout(setErrorTimeEmail, 50);
      error = true;
    } else if (!info.email.includes("@")) {
      setErrorEmail(true);
      setErrorMessage("Invalid Email");
      VibrateReset("email");
      resetTimeout(setErrorTimeEmail, 50);
      error = true;
    }
    return error;
  }

  async function forgetPassword() {
    await firebase
      .auth()
      .sendPasswordResetEmail(info.email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  function HandleForgetPassword() {
    if (!VerifyConnexion()) {
      forgetPassword().then(navigation.navigate("Login"));
    }
  }

  return (
    <SafeArea>
      <TitleBlock>
        <Title>Mots de passe oublié</Title>
      </TitleBlock>
      <InputForm
        type="email"
        placeholder="Email"
        info={info}
        setInfo={setInfo}
        error={errorEmail}
        errorTime={errorTimeEmail}
      />
      <InfoForm>
        Un lien vous sera envoyé pour réinitialiser votre mot de passe à
        l’adresse mail utilisée pour l’inscription.
      </InfoForm>
      <ButtonGradient OnPress={() => HandleForgetPassword()}>
        Envoyer le mail
      </ButtonGradient>
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
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        style={{
          backgroundColor: "#9275B2",
        }}
        theme={{
          colors: {
            inverseOnSurface: "white",
            inversePrimary: "#D9D9D9",
          },
        }}
        action={{
          label: "close",
          onPress: () => {
            setVisible(false);
          },
        }}
      >
        {errorMessage}
      </Snackbar>
    </SafeArea>
  );
};
