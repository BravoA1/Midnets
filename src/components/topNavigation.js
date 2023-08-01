export const TopNavigation = ({}) => {
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
