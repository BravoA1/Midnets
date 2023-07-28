import React, { useEffect, useState, useRef, createRef } from "react";
import { Snackbar } from "react-native-paper";
import { SafeAreaView, StatusBar, Dimensions, Vibration } from "react-native";
import styled from "styled-components/native";
import Logo from "../../components/Logo";
import InputForm from "../../components/InputForm.js";
import { firebase } from "../../../config";
import { ScrollView } from "react-native";
import { View } from "react-native";

let screenWidth = Dimensions.get("window").width;

const Scrollable = styled.ScrollView`
  flex: 1;
  width: 100%;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  margin: auto;
  width: ${(screenWidth * 3) / 4}px;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  padding-bottom: 30px;
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

export const RegisterScreen = ({ navigation }) => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [errorTimeName, setErrorTimeName] = useState(false);
  const [errorTimeEmail, setErrorTimeEmail] = useState(false);
  const [errorTimePassword, setErrorTimePassword] = useState(false);
  const [errorTimeConfirmPassword, setErrorTimeConfirmPassword] =
    useState(false);

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
    setErrorName(false);
    setErrorEmail(false);
    setErrorPassword(false);
    setErrorConfirmPassword(false);
    // All the condition it hurt to watch
    if (info.name.trim() == "") {
      setErrorName(true);
      setErrorMessage("All field must be fill");
      VibrateReset("name");
      resetTimeout(setErrorTimeName, 50);
      error = true;
    }
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
    if (info.confirmPassword.trim() == "") {
      setErrorConfirmPassword(true);
      setErrorMessage("All field must be fill");
      VibrateReset("confirmPassword");
      resetTimeout(setErrorTimeConfirmPassword, 50);
      error = true;
    }
    if (info.password !== info.confirmPassword) {
      console.log(info);
      setErrorPassword(true);
      setErrorConfirmPassword(true);
      setErrorMessage("Confirm Password must be the same as Password");
      VibrateReset("password", "confirmPassword");
      resetTimeout(setErrorTimePassword, 50);
      resetTimeout(setErrorTimeConfirmPassword, 50);
      error = true;
    }
    return error;
  }

  const registerUser = async (email, password, name) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://midnets.firebaseapp.com",
          })
          .then(() => {
            alert("Verification email sent");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                name,
                email,
              });
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  function HandleRegister() {
    if (!VerifyConnexion()) {
      registerUser(info.email, info.password, info.name).then(
        navigation.navigate("Login")
      );
    }
  }

  return (
    <Scrollable>
      <SafeArea>
        <Logo height={75} />
        <InputBlock style={{ marginTop: 50 }}>
          <InputForm
            type="text"
            placeholder="pseudo"
            setInfo={setInfo}
            info={info}
            error={errorName}
            errorTime={errorTimeName}
          >
            pseudo
          </InputForm>
        </InputBlock>
        <InputBlock>
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
        </InputBlock>
        <InputBlock>
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
        </InputBlock>
        <InputBlock>
          <InputForm
            type="password"
            placeholder="confirmer le mot de passe"
            setInfo={setInfo}
            info={info}
            confirm={true}
            error={errorConfirmPassword}
            errorTime={errorTimeConfirmPassword}
          >
            confirmation mot de passe
          </InputForm>
        </InputBlock>
        <ButtonRegister onPress={() => HandleRegister()}>
          <TextButton>S'inscrire</TextButton>
        </ButtonRegister>
        <ButtonLog>
          <GoogleIcon source={require("../../img/Google.png")} />
          <TextButtonGoogle>S'inscrire avec google</TextButtonGoogle>
        </ButtonLog>
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
    </Scrollable>
  );
};
