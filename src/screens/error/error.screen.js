import { Button, Image } from "react-native";
import { styled } from "styled-components";

const ScreenContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.bg.primary};
  alignitems: center;
  justifycontent: center;
  padding: 15%;
`;

const Oops = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.h2};
  text-align: center;
  margin-bottom: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[3]};
`;

const StyledImage = styled(Image)`
  resize-mode: cover;
  width: 100%;
  height: 30%;
  margin-bottom: ${(props) => props.theme.space[3]};
  border: 1px solid black;
`;

const Paragraph = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const Error = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const ErrorScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Oops>Oops!</Oops>
      <StyledImage source={require("../../img/oops.jpg")} />
      <Paragraph>La page que vous recherchez semble introuvable</Paragraph>
      <Error>erreur 404</Error>
      <Button title="home" onPress={() => navigation.navigate("Home")} />
    </ScreenContainer>
  );
};
