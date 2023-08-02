import { styled } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet } from "react-native";
import { useState } from "react";

export default ButtonGoogle = ({
	children,
	onPress,
	result,
	Disabled,
	width = 0.4,
}) => {
	const windowWidth = Dimensions.get("window").width;
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
	const BoxGradient = styled.View`
		width: ${windowWidth * width}px;
		box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
		background-color: #fff;
		border-radius: 100px;
		margin-bottom: 30px;
	`;

	const TextButtonGoogle = styled.Text`
		width: 80%;
		border-radius: 100px;
		font-size: ${windowWidth < "390" ? 11 : (props) => props.theme.sizes[1]};
	`;

	const GoogleIcon = styled.Image`
		width: ${windowWidth * 0.05};
		height: ${windowWidth * 0.05};
		margin-left: ${windowWidth * 0.04};
		margin-right: ${windowWidth * 0.04};
	`;

	const LinearButton = styled(LinearGradient)`
		width: 100%;
		border-radius: 100px;
		padding: 0px;
	`;

	const [color, setColor] = useState("#D8C2EF");

	return (
		<BoxGradient style={styles.container} onPress={onPress} disabled={Disabled}>
			<LinearButton
				colors={[`${color}`, "rgba(255,255,255,0)"]}
				locations={[0, 1]}
				start={{ x: 1, y: 0 }}
				end={{ x: 0, y: 1 }}
			>
				<ButtonElement onPress={onPress}>
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
