import React from "react";
import { styled } from "styled-components/native";
import { Text } from "react-native-paper";
import { TitleBlock } from "../../components/TitleBlock";
import { View, StyleSheet } from "react-native";

const Scrollable = styled.ScrollView`
	flex: 1;
	width: 100%;
`;

const Background = styled.Image`
	position: absolute;
	top: 0;
`;

const Container = styled.View`
	flex: 1;
	width: 100%;
	height: 1000px;
	align-items: center;
	margin: auto;
`;

const bg = require("../../img/background2.png");

export const Forum = () => {
	return (
		<Scrollable>
			<Container>
				<Background source={bg} />
				<View style={styles.containerCenter}>
					<TitleBlock title="Forum" />
				</View>
			</Container>
		</Scrollable>
	);
};

const styles = StyleSheet.create({
	containerCenter: {
		flex: 1,
		alignItems: "center",
	},
});
