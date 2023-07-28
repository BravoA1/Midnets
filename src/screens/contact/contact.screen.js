import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { styled } from "styled-components/native";
import Logo from "../../components/Logo";
import { FontAwesome5 } from "@expo/vector-icons";

let screenWidth = Dimensions.get("window").width;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin: auto;
  width: ${(screenWidth * 3) / 4}px;
`;
const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding-top: ${(props) => props.theme.space[3]};
`;
const ViewLogoContainer = styled.View`
  padding-top: ${(props) => props.theme.space[4]};
`;
const TextPresentation = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  margin-bottom: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[3]};
`;
const P = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  margin-bottom: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[3]};
`;
const Titre = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
`;
// bannière de titre
const ViewBanner = styled.View`
  width: ${screenWidth}px;
  align-items: center;
  background-color: white;
  border: 1px solid black;
`;
const ViewTitleContainer = styled.View`
  width: ${(screenWidth * 3) / 4}px;
  height: 50px;
  justify-content: center;
`;
const TextTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${screenWidth < "390"
    ? (props) => props.theme.sizes[0]
    : (props) => props.theme.sizes[1]};
`;
// informations container
const ViewContactInformationContainer = styled.View`
  background-color: gray;
  height: auto;
  border: 1px solid black;
  margin-top: ${(props) => props.theme.space[4]};
  margin-bottom: ${(props) => props.theme.space[4]};
  padding-top: ${(props) => props.theme.space[2]};
`;
// phone container
const ViewPhoneContainer = styled.View`
  margin-top: 10px;
  width: auto;
  padding: 10px;
  border-radius: 2px;
  flex-flow: row nowrap;
  align-items: center;
`;
const ImagePhoneIcon = styled.Image`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;
const TextPhoneNumber = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.sizes[1]};
  color: white;
`;
//mail container
const ViewMailContainer = styled.View`
  background-color: lightgray;
  width: ${(screenWidth * 2) / 4}px;
  padding: 10px;
  border-radius: 2px;
  border: 1px solid black;
  flex-flow: row nowrap;
  align-items: center;
  z-index: 1;
`;
const ImageMailIcon = styled.Image`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;
const TextMail = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${screenWidth < "390"
    ? (props) => props.theme.sizes[0]
    : (props) => props.theme.sizes[1]};
  /* font-size: ${(props) => props.theme.sizes[1]}; */
`;
// illustration image
const ImageIllustrationContact = styled.Image`
  width: 120px;
  height: 120px;
  position: absolute;
  right: 0;
  border: 1px solid black;
`;

const ImageBackground = styled.Image`
  z-index: -1;
  position: absolute;
  top: 0;
`;
const ViewIconContainer = styled.View`
  margin-top: 17%;
  margin-bottom: 13%;
  width: ${(screenWidth * 3) / 4}px;
  height: auto;
  bottom: 0;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

export const ContactScreen = () => {
  return (
    <>
      <ImageBackground source={require("../../img/fond4_blanc_v2.png")} />
      <Container>
        <ViewLogoContainer>{/* <Logo height={100} /> */}</ViewLogoContainer>
        {/* bandeau titre 1*/}
        <ViewBanner>
          <ViewTitleContainer>
            <TextTitle>Ce n'est que le début...</TextTitle>
          </ViewTitleContainer>
        </ViewBanner>
        <SafeArea>
          <TextPresentation style={styles.p1}>
            MIDNETS a été créer en ... par ... dans le but de mettre les femmes
            à l'honneur. Notre vision de l'avenir est [...] pour les femmes.
            MIDNETS vient de Midinettes, des femmes qui se regroupaient à la
            pause de midi pour manger ensemble (dinettes). Elles ont longtemps
            été représentées come les femmes superficielles.
          </TextPresentation>
        </SafeArea>
        {/* bandeau titre 2*/}
        <ViewBanner>
          <ViewTitleContainer>
            <TextTitle>Nous retrouver, nous contacter</TextTitle>
          </ViewTitleContainer>
        </ViewBanner>
        {/* contact & phone container */}
        <ViewContactInformationContainer>
          <SafeArea>
            {/* phone container */}
            <ViewPhoneContainer>
              <ImagePhoneIcon source={require("../../img/appel.png")} />
              <TextPhoneNumber>567 123 456</TextPhoneNumber>
            </ViewPhoneContainer>
            {/* mail container */}
            <ViewMailContainer>
              <ImageMailIcon source={require("../../img/arobase.png")} />
              <TextMail>midnets@outlook.fr</TextMail>
            </ViewMailContainer>
            <ImageIllustrationContact
              source={require("../../img/image_i_want_to_be_heard.jpg")}
            />
            <ViewIconContainer>
              <FontAwesome5
                style={styles.text}
                name="facebook"
                size={24}
                color="black"
              />
              <FontAwesome5
                name="twitter"
                size={24}
                color="black"
                style={styles.text}
              />
              <FontAwesome5
                name="instagram"
                size={24}
                color="black"
                style={styles.text}
              />
            </ViewIconContainer>
          </SafeArea>
        </ViewContactInformationContainer>
        <SafeArea>
          <View style={styles.creditContainer}>
            <ViewBanner>
              <ViewTitleContainer>
                <TextTitle>Crédits</TextTitle>
              </ViewTitleContainer>
            </ViewBanner>
            <P>
              Lorem ipsum dolor sit amet consectetur. Dolores asperiores eum
              ducimus culpa saepe! Soluta totam aut repellendus illo vero. Lorem
              ipsum dolor sit amet consectetur. Dolores asperiores eum ducimus
              culpa saepe! Soluta totam aut repellendus illo vero. Lorem ipsum
              dolor sit amet consectetur. Dolores asperiores eum ducimus culpa
            </P>
          </View>
        </SafeArea>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  p1: {
    lineHeight: 15,
  },
  creditContainer: {
    margin: 0,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "900",
    textShadowColor: "#9275B2",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 4,
    color: "white",
  },
});
