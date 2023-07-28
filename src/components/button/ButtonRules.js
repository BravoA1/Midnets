import { styled } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default ButtonRules = ({ children, OnPress }) => {
  const ButtonElement = styled.View`
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding-top: ${(props) => props.theme.space[2]};
  `;
  const BoxGradient = styled.TouchableOpacity`
    z-index: 1;
    width: 55px;
    height: 55px;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-radius: 100px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: ${(props) => props.theme.space[4]};
  `;

  const Text = styled.Text`
    font-size: 13px;
    font-family: ${(props) => props.theme.fonts.body};
  `;

  const LinearButton = styled(LinearGradient)`
    width: 100%;
    height: 100%;
    border-radius: 100px;
    padding: 0px;
  `;

  return (
    <BoxGradient style={styles.container} onPress={OnPress}>
      <LinearButton
        colors={["#D8C2EF", "rgba(255,255,255,0)"]}
        locations={[0, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ButtonElement>
          {/* <TextButton>{children}</TextButton> */}
        </ButtonElement>
        <Text>Règles</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </LinearButton>
    </BoxGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 20,
  },
});
