import { Button, SafeAreaView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../components/Logo";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
`;
const LogoContainer = styled.View`
  padding-top: 40px;
`;

const NavBar = styled.View`
  display: flex;
  flex: 0.3;
  padding: 5%;
  align-items: center;
`;
const GroupContainer = styled.View`
  flex: 1;
  padding: 5%;
  align-items: center;
`;

const TitleContainer = styled.View`
  flex-direction: row;
`;

const BlackDot = styled.View`
  position: relative;
  width: 5%;
  right: 22.7%;
  aspect-ratio: 1 / 1;
  background-color: black;
  border-radius: 500px;
`;

const HorizontalLine = styled.View`
  width: 1%;
  height: 50%;
  background-color: black;
`;

const VerticalLine = styled.View`
  height: 0.5%;
  width: 30%;
  background-color: black;
`;

const Title = styled.View``;

export const HomeScreen = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo height={100} />
      </LogoContainer>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <NavBar>
          <VerticalLine />
          <HorizontalLine />
          <VerticalLine />
        </NavBar>
        <GroupContainer>
          <TitleContainer>
            <BlackDot />
            <Title>
              <LinearGradient
                colors={["transparent", "lightgrey"]}
                locations={[0.1, 0.3]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text>Test gradiant</Text>
              </LinearGradient>
            </Title>
            {/* <Text style={{ fontSize: 10 }}>
              The missile knows where it is at all times.
            </Text> */}
          </TitleContainer>
        </GroupContainer>
      </View>
    </Container>
  );
};
