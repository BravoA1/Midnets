import { Dimensions } from "react-native";
import { styled } from "styled-components";

let screenWidth = Dimensions.get("window").width;
const TitleBlockStyle = styled.View`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
  border-bottom-width: 2px;
  border-top-width: 2px;
  padding: 10px 50px;
  width: ${(screenWidth * 3) / 4}px;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  font-family: ${(props) => props.theme.fonts.headingBold};
`;

export const TitleBlock = ({ title }) => {
  return (
    <TitleBlockStyle>
      <Title>{title}</Title>
    </TitleBlockStyle>
  );
};
