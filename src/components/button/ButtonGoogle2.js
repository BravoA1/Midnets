import { styled } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { colors } from "../../infrastructure/theme/colors";

const screenWitdh = Dimensions.get("window").width;

export default ButtonGoogle2 = ({ children, OnPress, result, Disabled }) => {
	const ButtonElement = styled.View`
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 10px;
		color: #000;
		width: 100%;
		/* height: 100%; */
		border-radius: 100px;
	`;
	const BoxGradient = styled.TouchableOpacity`
		z-index: 1;
		width: ${screenWitdh * 0.4}px;
		height: ${screenWitdh * 0.2}px;
		box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
		background-color: #fff;
		border-radius: 100px;
		margin-bottom: 30px;
		text-align: center;
	`;

	const TextButtonGoogle = styled.Text`
		width: ${screenWitdh * 0.6}px;
		border-radius: 100px;
		font-size: 14px;
	`;

	const GoogleIcon = styled.Image`
		width: 30px;
		height: 30px;
		margin-left: 5px;
		margin-right: 15px;
	`;

	const LinearButton = styled(LinearGradient)`
		width: 100%;
		border-radius: 100px;
		padding: 0px;
	`;

	const [color, setColor] = useState("#D8C2EF");

	useEffect(() => {
		switch (result) {
			case "wrong":
				setColor(colors.ui.error);
				break;
			case "correct":
				setColor(colors.ui.success);
				break;
			default:
				setColor("#D8C2EF");
		}
	}, [result]);

	return (
		<BoxGradient style={styles.container} onPress={OnPress} disabled={Disabled}>
			<LinearButton
				colors={[`${color}`, "rgba(255,255,255,0)"]}
				locations={[0, 1]}
				start={{ x: 1, y: 0 }}
				end={{ x: 0, y: 1 }}
			>
				<ButtonElement>
					<GoogleIcon source={require("../../img/Google.png")} />
					<TextButtonGoogle>{children}</TextButtonGoogle>
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
