import React from "react";
import { styled } from "styled-components/native";
import {
	StatusBar,
	SafeAreaView,
	View,
	StyleSheet,
	Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	align-items: center;
	margin: auto;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const ForumConversationHelp = () => {
	return (
		<>
			<SafeArea>
				<View>
					<Text>Test</Text>
				</View>
			</SafeArea>
		</>
	);
};
