import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, Dimensions, Platform } from "react-native";
import { styled } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ButtonGradientQuiz } from "../../components/button/ButtonGradientQuiz";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;

const Title = styled.View`
  width: 100%;
  align-items: flex-start;
`;

const HeaderTitle = styled.Text`
  padding: 0px 2px 0px 5px;
`;
const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: auto;
  padding: 0 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.border.quarternary};
`;

const MessageView = styled.View`
  width: ${windowWidth * 0.75}px;
  margin: auto;
  margin-top: 30px;
  gap: 30px;
  flex: 1;
`;

const DescribeInput = styled.TextInput`
  width: ${windowWidth * 0.75}px;
  flex: 1;
  padding: 10px;
  ${Platform.OS === "android" && "textAlignVertical: top"};
  ${(Platform.OS === "ios" && "marginTop: auto", "height: 188px")};
  text-align: center;
`;

const InfoResponseView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 5px;
  border-bottom-width: 1px;
  border-bottom-color: black;
`;

const IconView = styled.View`
  border-top-width: 1px;
  border-top-color: black;
  padding-top: 3px;
`;

const InfoResponseIcon = styled.Image`
  width: 20px;
  aspect-ratio: 1 / 1;
`;
const Background = styled.Image`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: ${windowHeight}px;
`;
const CountLetterText = styled.Text``;

const bg = require("../../img/background2.png");
export const ForumResponse = () => {
  const [chevronActive, setChevronActive] = useState(false);
  const [value, setValue] = useState("");
  const [name, setName] = useState("Nom Prénom");

  const ChevronView = styled.View`
    ${chevronActive !== false && "transform: rotate(180deg)"};
  `;
  return (
    <>
      <Background source={bg} />
      <SafeArea>
        <KeyboardAwareScrollView
          extraScrollHeight={-50}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              backgroundColor: "white",
            }}
          >
            <HeaderView style={{ alignContent: "center", marginTop: 10 }}>
              <ChevronView onPress={() => setChevronActive(true)}>
                <Ionicons
                  name="md-chevron-down-outline"
                  size={50}
                  color="#bbb"
                />
              </ChevronView>
              <ButtonGradientQuiz title="Envoyer" />
            </HeaderView>
          </View>
          <MessageView>
            <Title>
              <LinearGradient
                style={{ borderRadius: 8 }}
                colors={["white", "#D8C2EF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <HeaderTitle>{name}</HeaderTitle>
              </LinearGradient>
            </Title>
            <DescribeInput
              editable
              multiline
              numberOfLines={10}
              maxLength={360}
              onChangeText={(text) => setValue(text)}
              placeholder="Entrez votre description"
              autoFocus
            />
            <InfoResponseView>
              <IconView>
                <InfoResponseIcon source={require("../../img/head.png")} />
              </IconView>
              <IconView>
                <CountLetterText>0/360</CountLetterText>
              </IconView>
            </InfoResponseView>
          </MessageView>
        </KeyboardAwareScrollView>
      </SafeArea>
    </>
  );
};
