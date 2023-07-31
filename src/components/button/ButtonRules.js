import { styled } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default ButtonRules = ({ children, OnPress }) => {
  const BoxGradient = styled.TouchableOpacity`
    z-index: 1;
    width: 60px;
    height: 60px;
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
    text-align: center;
  `;

  const LinearButton = styled(LinearGradient)`
    width: 100%;
    height: 100%;
    border-radius: 100px;
    padding: 0px;
    align-items: center;
    justify-content: flex-end;
  `;

  return (
    <BoxGradient style={styles.container} onPress={OnPress}>
      <LinearButton
        colors={["#D8C2EF", "rgba(255,255,255,0)"]}
        locations={[0, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <Text>Règles</Text>
        <Ionicons name="chevron-down" size={25} color="black" />
      </LinearButton>
    </BoxGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 20,
  },
});
