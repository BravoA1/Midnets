import { useState } from "react";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { View, Text, StatusBar, Dimensions } from "react-native";
import { PopUpLearnMore } from "../../components/PopupLearnMore";
import { styled } from "styled-components";

const screenWidth = Dimensions.get("window").width;

const ContainerView = styled.View`
  margin: auto;
`;
const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin: auto;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  width: 100%;
`;

const NameText = styled.Text`
  width: 85%;
  background-color: #d9d9d9;
  font-size: ${(screenWidth * 6) / 100}px;
  font-family: ${(props) => props.theme.fonts.body};
  padding-left: 20px;
`;

const PortraitImage = styled.Image`
  margin-left: ${(screenWidth * 0.2) / 4}px;
  width: ${(screenWidth * 2.8) / 4}px;
  height: ${(screenWidth * 2.8) / 4}px;
`;

const IconArticle = styled.Image`
  width: 35px;
  aspect-ratio: 1 / 1;
`;

const IconLearnMore = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 35%;
  right: -25px;
  padding: 5px;
  background-color: white;
  border-radius: 500px;
`;

const ArticleComponentView = styled.View`
  margin-left: ${(screenWidth * 0.2) / 4}px;
  width: ${(screenWidth * 2.8) / 4}px;
  margin-top: 30px;
`;

const SubTitleArticle = styled.Text`
  font-size: ${(screenWidth * 5) / 100}px;
`;

const SubTitleView = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: #000;
  margin-bottom: 10px;
`;

const TextArticle = styled.Text`
  font-size: ${(screenWidth * 3) / 100}px;
`;

const ViewIcons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Triangle = styled.View`
  position: absolute;
  height: 0;
  width: 0;
  border-top-width: ${screenWidth * 0.05}px;
  border-top-color: #9e9e9e;
  border-left-width: ${screenWidth * 0.05}px;
  border-left-color: transparent;
  top: 100%;
  left: 0;
`;

export const PortraitArticleScreen = ({ navigation, route }) => {
  const [showLearnMoreModale, setShowLearnMoreModale] = useState(false);
  const { name } = route.params;

  return (
    <>
      <SafeArea>
        <ScrollView>
          <ContainerView>
            <View>
              <NameText>{name && name}</NameText>
              <Triangle></Triangle>
            </View>
            <View>
              <PortraitImage
                source={require("../../img/portraitMarieCurie.jpg")}
              />
              <IconLearnMore
                onPress={() => {
                  setShowLearnMoreModale(true);
                }}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={require("../../img/timeSearch.png")}
                />
              </IconLearnMore>
            </View>
            <ArticleComponentView>
              <SubTitleView>
                <SubTitleArticle>Histoire</SubTitleArticle>
              </SubTitleView>
              <TextArticle>
                potenti lectus augue hac purus lectus gravida. Elementum nunc ac
                quis mattis proin nunc. Tortor dictum nam vitae feugiat. Libero
                bibendum id massa mollis. In vitae interdum sagittis tristique.
                Lectus fermentum sit morbi justo arcu vestibulum lectus. Auctor
                aliquet Elle est connue pour
              </TextArticle>
            </ArticleComponentView>
            <ArticleComponentView>
              <SubTitleView>
                <SubTitleArticle>Elle est connue pour</SubTitleArticle>
              </SubTitleView>
              <TextArticle>
                sapien amet phasellus nec velit. Aenean dictum velit accumsan
                euismod tristique donec egestas. Quis pretium sed nulla vehicula
                viverra nulla eu at. Egestas ultricies velit ultrices et
                venenatis rutrum. Amet nisl amet pharetra eget ultrices massa
                aliquam dictum rhoncus. Vitae nulla
              </TextArticle>
            </ArticleComponentView>
            <ViewIcons>
              <IconArticle source={require("../../img/heart.png")} />
              <IconArticle source={require("../../img/share.png")} />
            </ViewIcons>
          </ContainerView>
        </ScrollView>
      </SafeArea>
      {showLearnMoreModale && (
        <PopUpLearnMore
          showPopup={showLearnMoreModale}
          setShowPopup={setShowLearnMoreModale}
        />
      )}
    </>
  );
};
