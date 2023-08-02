import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput, View, Text } from "react-native";
import { styled } from "styled-components/native";

const Container = styled.View`
  margin-bottom: 20px;
`;
const Label = styled.Text`
  text-align: left;
  margin-bottom: 10px;
  margin-left: 15%;
  font-family: Alata_400Regular;
`;

const Input = styled.View`
  flex-direction: row;
  align-items: center;
  width: 300px;
  height: 40px;
  padding: 5px;
  padding-left: 15px;
  border: solid 2px #a3a3a3;
  border-radius: 100px;
  background-color: #d9d9d9;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  elevation: 4;
`;

const IconInputImage = styled.Image`
  margin-right: 11px;
  margin-left: -5px;
  width: 20px;
  aspect-ratio: 1;
`;
const InputContent = styled.TextInput`
  width: 90%;
  color: rgba(0, 0, 0, 0.3);
  font-family: Alata_400Regular;
`;

const Spacer = styled.View`
  margin-right: 20px;
  width: 20px;
`;

export default function InputForm({
  children,
  type,
  placeholder,
  info,
  setInfo,
  confirm,
  error,
  errorTime,
}) {
  const [value, setValue] = useState("");

  const styles = StyleSheet.create({
    input: {
      borderColor: error ? "red" : "#a3a3a3",
      shadowColor: "black",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 2,
    },
  });

  const renderInput = (type) => {
    switch (type) {
      case "email":
        // console.log('mail')
        return (
          <Input style={styles.input}>
            <IconInputImage source={require("../img/arobase-grey.png")} />
            {errorTime ? (
              <InputContent
                defaultValue={info.email}
                value={""}
                onChangeText={(email) =>
                  setInfo(() => {
                    let newObject = info;
                    newObject.email = email;
                    return newObject;
                  })
                }
                autoCapitalize="none"
                placeholder={placeholder}
                placeholderTextColor="rgba(0,0,0,.3)"
                inputMode="email"
              />
            ) : (
              <InputContent
                defaultValue={info.email}
                onChangeText={(email) =>
                  setInfo(() => {
                    let newObject = info;
                    newObject.email = email;
                    return newObject;
                  })
                }
                autoCapitalize="none"
                placeholder={placeholder}
                placeholderTextColor="rgba(0,0,0,.3)"
                inputMode="email"
              />
            )}
          </Input>
        );
      case "password":
        // console.log('mot de passe')
        return (
          <Input style={styles.input}>
            <IconInputImage source={require("../img/Key.png")} />
            {errorTime ? (
              <InputContent
                defaultValue={confirm ? info.confirmPassword : info.password}
                value={""}
                onChangeText={(password) =>
                  setInfo(() => {
                    if (confirm) {
                      let newObject = info;
                      newObject.confirmPassword = password;
                      return newObject;
                    } else {
                      let newObject = info;
                      newObject.password = password;
                      return newObject;
                    }
                  })
                }
                secureTextEntry={true}
                placeholder={placeholder}
                placeholderTextColor="rgba(0,0,0,.3)"
              />
            ) : (
              <InputContent
                defaultValue={confirm ? info.confirmPassword : info.password}
                onChangeText={(password) =>
                  setInfo(() => {
                    if (confirm) {
                      let newObject = info;
                      newObject.confirmPassword = password;
                      return newObject;
                    } else {
                      let newObject = info;
                      newObject.password = password;
                      return newObject;
                    }
                  })
                }
                secureTextEntry={true}
                placeholder={placeholder}
                placeholderTextColor="rgba(0,0,0,.3)"
              />
            )}
          </Input>
        );
      case "text":
        // console.log('text')
        return (
          <Input style={styles.input}>
            <Spacer />
            {errorTime ? (
              <InputContent
                defaultValue={info.name}
                value={""}
                onChangeText={(name) =>
                  setInfo(() => {
                    let newObject = info;
                    newObject.name = name;
                    return newObject;
                  })
                }
                placeholder={placeholder}
                placeholderTextColor="rgba(0,0,0,.3)"
                inputMode="text"
              />
            ) : (
              <InputContent
                defaultValue={info.name}
                onChangeText={(name) =>
                  setInfo(() => {
                    let newObject = info;
                    newObject.name = name;
                    return newObject;
                  })
                }
                placeholder={placeholder}
                placeholderTextColor="rgba(0,0,0,.3)"
                inputMode="text"
              />
            )}
          </Input>
        );
      case "textBasic":
        // console.log('text')
        return (
          <Input style={{ borderColor: error ? "red" : "#a3a3a3" }}>
            <Spacer />
            {errorTime ? (
              <InputContent
                value={""}
                onChangeText={(text) => setInfo(text)}
                placeholder={placeholder}
                placeholderTextColor="rgba(0,0,0,.3)"
                inputMode="text"
                editable={error ? false : true}
              />
            ) : (
              <InputContent
                onSubmitEditing={() => {
                  setInfo(value);
                  console.log("inSubmit");
                }}
                onChangeText={(text) => {
                  setValue(text);
                }}
                placeholder={placeholder}
                placeholderTextColor="rgba(0,0,0,.3)"
                inputMode="text"
                editable={error ? false : true}
              />
            )}
          </Input>
        );
      default:
        break;
    }
  };
  return (
    <Container>
      {children && <Label>{children}</Label>}
      {renderInput(type)}
    </Container>
  );
}
