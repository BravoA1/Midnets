import { styled } from "styled-components/native";
import { TitleBlock } from "../../components/TitleBlock";
import {
  StatusBar,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";
import { TopNavigation } from "../../components/topNavigation";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Background = styled.Image`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: ${windowHeight}px;
`;

const Scrollable = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  margin: auto;
`;
const NotificationContainer = styled.View`
  flex: 1;
  width: 80%;
  min-height: 100px;
  margin: auto;
  background-color: white;
  border-radius: 25px;
  padding-top: 15px;
  border: solid 1px ${(props) => props.theme.colors.brand.secondary};
  margin-bottom: 25px;
`;
const NewNotification = styled.View`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  margin: 0 15px 15px 15px;
  padding: 15px;
  border-radius: 10px;
`;

const OldNotification = styled.View`
  background-color: ${(props) => props.theme.colors.text.secondary};
  margin: 0 15px 15px 15px;
  padding: 15px;
  border-radius: 10px;
`;
const Dot = styled.View`
  background-color: ${(props) => props.theme.colors.brand.secondary};
  margin: 5px 5px 0 0;
  width: 10px;
  height: 10px;
  border-radius: 25px;
`;

const OldDot = styled.View`
  background-color: ${(props) => props.theme.colors.text.secondary};
  margin: 5px 5px 0 0;
  width: 10px;
  height: 10px;
  border-radius: 25px;
  border: solid 1px ${(props) => props.theme.colors.brand.secondary};
`;

const bg = require("../../img/background2.png");

export const NotificationApp = ({ navigation }) => {
  return (
    <>
      <TopNavigation navigation={navigation} />
      <Background source={bg} />
      <TopNavigation navigation={navigation} />
      <SafeArea>
        <Scrollable>
          <Container>
            <View style={styles.containerCenter}>
              <TitleBlock title="Notification" />
            </View>
          </Container>
          <NotificationContainer>
            <NewNotification>
              <View style={styles.dot}>
                <Dot></Dot>
                <Text>Midnetlover a répndu à</Text>
              </View>
              <Text style={styles.underline}>Une Question</Text>
            </NewNotification>

            <NewNotification>
              <View style={styles.dot}>
                <Dot></Dot>
                <Text>Midnetlover a répndu à</Text>
              </View>
              <Text style={styles.underline}>Une Question</Text>
            </NewNotification>

            <OldNotification>
              <View style={styles.dot}>
                <OldDot></OldDot>
                <Text>Midnetlover a répndu à</Text>
              </View>
              <Text style={styles.underline}>Une Question</Text>
            </OldNotification>

            <OldNotification>
              <View style={styles.dot}>
                <OldDot></OldDot>
                <Text>Midnetlover a répndu à</Text>
              </View>
              <Text style={styles.underline}>Une Question</Text>
            </OldNotification>

            <OldNotification>
              <View style={styles.dot}>
                <OldDot></OldDot>
                <Text>Midnetlover a répndu à</Text>
              </View>
              <Text style={styles.underline}>Une Question</Text>
            </OldNotification>

            <OldNotification>
              <View style={styles.dot}>
                <OldDot></OldDot>
                <Text>Midnetlover a répndu à</Text>
              </View>
              <Text style={styles.underline}>Une Question</Text>
            </OldNotification>

            <OldNotification>
              <View style={styles.dot}>
                <OldDot></OldDot>
                <Text>Midnetlover a répndu à</Text>
              </View>
              <Text style={styles.underline}>Une Question</Text>
            </OldNotification>

            <OldNotification>
              <View style={styles.dot}>
                <OldDot></OldDot>
                <Text>Midnetlover a répndu à</Text>
              </View>
              <Text style={styles.underline}>Une Question</Text>
            </OldNotification>
          </NotificationContainer>
        </Scrollable>
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    alignItems: "center",
  },
  dot: {
    flexDirection: "row",
  },
  underline: {
    textDecorationLine: "underline",
    marginLeft: 15,
  },
});
