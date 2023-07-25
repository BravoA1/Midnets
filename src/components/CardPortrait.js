import { TouchableOpacity } from "react-native";
import { View, Text, Dimensions, Image } from "react-native";
import { styled } from "styled-components";

let screenWidth = Dimensions.get("window").width;

const NameView = styled.View`
  width: 50%;
  background-color: #d9d9d9;
  padding-left: 12px;
`;
const NameText = styled.Text`
  font-size: 15px;
`;
const DateView = styled.View`
  position: absolute;
  top: 35%;
  right: 0px;
  width: 65px;
  background-color: #d9d9d9;
  padding-left: 5px;
  z-index: 100;
`;
const DateText = styled.Text`
  font-size: 15px;
`;

const CardBlock = styled.View`
  background-color: #d9d9d9;
  width: 93%;
  aspect-ratio: 31 / 8;
  overflow: hidden;
  margin-left: 5%;
`;

const CardImage = styled.Image`
  width: 100%;
`;

const CardNewPortraitView = styled.View`
  position: absolute;
  width: 55%;
  top: 45px;
  right: 5px;
  background-color: white;
  padding: 2px;
  z-index: 200;
  transform: rotate(27.372deg);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const CardNewPortraitViewText = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${screenWidth * (3 / 100)}px;
`;

export const CardPortrait = ({ OnPress, isNewPortrait, url, height }) => {
  return (
    <TouchableOpacity onPress={OnPress}>
      <NameView>
        <NameText>Prénom NOM</NameText>
      </NameView>
      <CardBlock>
        <CardImage resizeMode="cover" style={{ height: height }} source={url} />
      </CardBlock>
      {isNewPortrait && (
        <CardNewPortraitView>
          <CardNewPortraitViewText>Nouveau portrait</CardNewPortraitViewText>
        </CardNewPortraitView>
      )}
      <DateView>
        <DateText>19XX</DateText>
      </DateView>
    </TouchableOpacity>
  );
};
