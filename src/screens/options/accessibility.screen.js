import { styled } from "styled-components/native";
import { TitleBlock } from "../../components/TitleBlock";
import { AccessibilityOption } from "./accessibilityOption.component";
import { View, StyleSheet } from "react-native";
import { useState } from "react";

const Scrollable = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: #ffffff;
`;

const Background = styled.Image`
  position: absolute;
  top: 0;
`;

const bg = require("../../img/background2.png");

export const AccessibilityScreen = ({ navigation }) => {
  const [option0, setOption0] = useState(false);
  const [options, setOptions] = useState(false);
  return (
    <Scrollable>
      <Background source={bg} />
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
