import { styled } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default ButtonResponse = ({ children, OnPress, result }) => {
  const ButtonElement = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #000;
    width: 100%;
    border-radius: 100px;
  `;
  const BoxGradient = styled.View`
    width: 40%;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-radius: 100px;
    margin-bottom: 30px;
    text-align: center;
  `;

  const TextButton = styled.Text`
    font-size: 16px;
    text-align: center;
  `;

  const LinearButton = styled(LinearGradient)`
    width: 100%;
    border-radius: 100px;
    padding: 0px;
  `;

  return (
    <BoxGradient style={styles.container}>
      <LinearButton
        colors={["#D8C2EF", "rgba(255,255,255,0)"]}
        locations={[0, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ButtonElement onPress={OnPress}>
          <TextButton>{children}</TextButton>
        </ButtonElement>
      </LinearButton>
    </BoxGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 10,
  },
});
