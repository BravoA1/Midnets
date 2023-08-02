import React from "react";
import { styled } from "styled-components/native";
import { StatusBar, SafeAreaView, Dimensions, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ForumHeader } from "../../components/forum/forumHeader";
import { ForumMessage } from "../../components/forum/forumMessage";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const BackgroundWhite = styled.View`
  background-color: #ffffff;
  width: 100%;
`;

const Background = styled.Image`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: ${windowHeight}px;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  margin: auto;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const MessageView = styled.View`
  gap: 20px;
  padding-top: 20px;
`;

const bg = require("../../img/background2.png");

export const ForumConversation = ({ route }) => {
  const { forum } = route.params;
  console.log(forum.response, "response");
  return (
    <>
      <Background source={bg} />
      <ScrollView>
        <BackgroundWhite>
          <SafeArea>
            <ForumHeader
              headerTitle={forum.user.name}
              headerText={forum.Status}
              bodyText={forum.description}
              datePost={"Il y a XX jours"}
              numberCom={"XX commentaires"}
            />
          </SafeArea>
        </BackgroundWhite>
        <MessageView>
          {forum.response.map((response, i) => (
            <ForumMessage
              subject={response.Status}
              key={i}
              message={response.response}
              icon={true}
            />
          ))}
        </MessageView>
      </ScrollView>
    </>
  );
};
