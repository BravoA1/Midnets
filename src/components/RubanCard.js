import { styled } from "styled-components/native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const RubanContainer = styled.View`
  align-items: center;
`;

const BorderTop = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  height: 40px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: ${(screenWidth * 3) / 4}px;
`;

const BorderBottom = styled.View`
  height: 25px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: ${(screenWidth * 3) / 4}px;
`;

const Banner = styled.View`
  background-color: transparent;
`;

const Ruban = styled.View`
  width: ${(screenWidth * 9) / 10}px;
`;

const Title = styled.Text`
  height: 48px;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
`;

const Triangle = styled.View`
  height: 0;
  width: 0;
  border-top-width: 50px;
  border-left-width: 50px;
  border-top-color: ${(props) => props.theme.colors.bg.secondary};
  border-left-color: transparent;
  position: absolute;
  top: 48px;
  left: 0;
  z-index: -1;
`;

const Container = styled.View``;

const Bottom = styled.View`
  height: 20px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: ${(screenWidth * 3) / 4}px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export default RubanCardComponent = ({ children, title }) => {
  return (
    <RubanContainer>
      <BorderTop></BorderTop>
      <Ruban>
        <Banner>
          <Title>{title}</Title>
          <Triangle></Triangle>
        </Banner>
      </Ruban>
      <BorderBottom></BorderBottom>
      <Container>{children}</Container>
      <Bottom></Bottom>
    </RubanContainer>
  );
};
