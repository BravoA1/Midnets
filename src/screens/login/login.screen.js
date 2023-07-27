import { SafeAreaView, StatusBar, Dimensions, Vibration } from "react-native";
import InputForm from "../../components/InputForm.js";
import { styled } from "styled-components/native";
import Logo from "../../components/Logo.js";
import ButtonGradient from "../../components/ButtonGradient.js";
import ButtonGoogle from "../../components/ButtonGoogle.js";
import { useState } from "react";
import { Snackbar } from "react-native-paper";
import { firebase } from "../../../config";
import ButtonResponse from "../../components/ButtonResponse.js";

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
`;
const SpacerTop = styled.View`
  margin-top: 40px;
`;

const ForgotPassword = styled.Text`
  color: #989898;
  margin-top: -10px;
  margin-bottom: 25px;
  align-self: flex-end;
  text-decoration: underline;
  text-decoration-color: #989898;
  font-family: ${(props) => props.theme.fonts.body};
`;

const ButtonRegister = styled.TouchableOpacity`
  width: 70%;
  margin-bottom: 30px;
  color: #000;
`;
const TextButton = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.headingBold};
`;

export const Login = ({ navigation }) => {
  const [info, setInfo] = useState({ email: "", password: "" });
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorTimeEmail, setErrorTimeEmail] = useState(false);
  const [errorTimePassword, setErrorTimePassword] = useState(false);

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
    // console.log(info);
    // Reset all the state
    setVisible(false);
    setErrorMessage("");
    setErrorEmail(false);
    setErrorPassword(false);
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
    if (info.password.trim() == "") {
      setErrorPassword(true);
      setErrorMessage("All field must be fill");
      VibrateReset("password");
      resetTimeout(setErrorTimePassword, 50);
    }
    return error;
  }

  async function loginUser(email, password) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      VibrateReset("email", "password");
      setErrorEmail(true);
      setErrorPassword(true);
      setErrorMessage("Email or Passowrd incorect");
    }
  }

  function HandleLogin() {
    if (!VerifyConnexion()) {
      console.log("ça passe");
      loginUser(info.email, info.password).then(navigation.navigate("Home"));
    }
  }

  return (
    <SafeArea>
      <SpacerBottom />
      <Logo height={75} />
      <SpacerTop />
      <InputForm
        type="email"
        placeholder="email"
        setInfo={setInfo}
        info={info}
        error={errorEmail}
        errorTime={errorTimeEmail}
      >
        adresse mail
      </InputForm>
      <InputForm
        type="password"
        placeholder="mot de passe"
        setInfo={setInfo}
        info={info}
        error={errorPassword}
        errorTime={errorTimePassword}
      >
        mot de passe
      </InputForm>
      <ForgotPassword onPress={() => navigation.navigate("ForgotPswd")}>
        mot de passe oublié ?
      </ForgotPassword>
      <ButtonResponse OnPress={() => HandleLogin()}>Connexion</ButtonResponse>
      <ButtonRegister onPress={() => navigation.navigate("Register")}>
        <TextButton>Inscription</TextButton>
      </ButtonRegister>
      <ButtonGoogle>Se connecter avec google</ButtonGoogle>
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
