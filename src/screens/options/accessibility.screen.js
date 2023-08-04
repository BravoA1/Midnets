import { styled } from "styled-components/native";
import { TitleBlock } from "../../components/TitleBlock";
import { AccessibilityOption } from "./accessibilityOption.component";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import { useState } from "react";
import { TopNavigation } from "../../components/topNavigation";

const screenWidth = Dimensions.get("window").width;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin: auto;
`;

const Scrollable = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const BgImg = styled.Image`
  z-index: -1;
  position: absolute;
  top: 0;
  opacity: 0.4;
`;

export const AccessibilityScreen = ({ navigation }) => {
  const [option0, setOption0] = useState(false);
  const [options, setOptions] = useState(false);
  return (
    <>
      <TopNavigation navigation={navigation} />

      <SafeArea>
        <Scrollable>
          <View style={styles.containerCenter}>
            <TitleBlock title="Accessibilité" />
          </View>
          <View style={styles.container}>
            <AccessibilityOption
              title="Option without long paragraph"
              content="Paragraph"
              state={option0}
              setState={setOption0}
            />

            {[...Array(10)].map((x, i) => (
              <AccessibilityOption
                key={i}
                title={`Option ${i + 1}`}
                content="Lorem ipsum dolor sit amet consectetur. Magnis nunc nunc suspendisse
        suspendisse Lorem ipsum dolor sit amet consectetur. Magnis nunc nunc
        suspendisse suspendisse."
                state={options}
                setState={setOptions}
              />
            ))}
          </View>
        </Scrollable>
      </SafeArea>
      <BgImg source={require("../../img/account_bg.png")} />
    </>
  );
};

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});
