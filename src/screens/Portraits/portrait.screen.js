import { Dimensions, ScrollView, StatusBar, View } from "react-native";
import { CardPortrait } from "../../components/CardPortrait";
import { styled } from "styled-components/native";

let screenWidth = Dimensions.get("window").width;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin: auto;
  width: ${(screenWidth * 3) / 4}px;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const TitleBlock = styled.View`
  width: 100%;
  margin: 20px 0;
  border-bottom-width: 2px;
  border-top-width: 2px;
  padding: 10px 70px;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  font-family: ${(props) => props.theme.fonts.headingBold};
`;

const CategoryBlock = styled.View`
  flex-direction: row;
  gap: 10px;
  padding: 3px 10px;
  padding-right: 0;
  background-color: #fff;
  border: solid 2px #a3a3a3;
  border-radius: 10px;
`;

const CategoryImageBlock = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #757575;
  border: solid 2px #000;
  border-radius: 100px;
  width: 50px;
  aspect-ratio: 1 / 1;
  padding: 10px;
`;

const CategoryIcon = styled.Image`
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
`;

const CategoryTitle = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

const BlockCard = styled.View`
  margin-top: 30px;
  gap: 20px;
`;

export const PortraitsScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <ScrollView>
        <TitleBlock>
          <Title>Portraits</Title>
        </TitleBlock>
        <CategoryBlock>
          <CategoryImageBlock>
            <CategoryIcon
              source={require("../../img/sagittarius-symbol.png")}
            />
          </CategoryImageBlock>
          <CategoryTitle>Catégories</CategoryTitle>
        </CategoryBlock>
        <BlockCard>
          <CardPortrait
            OnPress={() => navigation.navigate("PortraitArticle")}
            url={require("../../img/portraitMarieCurie.jpg")}
            height={150}
            isNewPortrait={true}
          />
          <CardPortrait
            OnPress={() => navigation.navigate("PortraitArticle")}
            url={require("../../img/portraitSuzyHazelwood.jpg")}
            height={100}
          />
          <CardPortrait
            OnPress={() => navigation.navigate("PortraitArticle")}
            url={require("../../img/portraitSuzyHazelwood.jpg")}
            height={100}
          />
          <CardPortrait
            OnPress={() => navigation.navigate("PortraitArticle")}
            url={require("../../img/portraitSuzyHazelwood.jpg")}
            height={100}
          />
          <CardPortrait
            OnPress={() => navigation.navigate("PortraitArticle")}
            url={require("../../img/portraitSuzyHazelwood.jpg")}
            height={100}
          />
        </BlockCard>
      </ScrollView>
    </SafeArea>
  );
};
