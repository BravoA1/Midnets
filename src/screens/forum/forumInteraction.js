import React, { useState, useMemo } from "react";
import { styled } from "styled-components/native";
import {
	StatusBar,
	SafeAreaView,
	View,
	StyleSheet,
	Dimensions,
	ScrollView,
	Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ForumMessage } from "../../components/forum/forumMessage";
import RadioGroup from "react-native-radio-buttons-group";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	align-items: center;
	margin: auto;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const TitleBlock = styled.View`
	width: 100%;
	margin-top: 20px;
	margin-bottom: 40px;
	border-bottom-width: 2px;
	border-top-width: 2px;
	padding: 20px 50px;
`;

const Title = styled.Text`
	text-align: center;
	font-size: 25px;
	font-family: ${(props) => props.theme.fonts.headingBold};
`;

const InteractionText = styled.Text`
	text-align: center;
	font-family: ${(props) => props.theme.fonts.headingRegular};
	font-size: ${(props) => props.theme.fontSizes.title};
`;

const MessageView = styled.View`
	gap: 20px;
	padding-top: 20px;
`;
export const ForumInteraction = () => {
	const radioButtons = useMemo(() => [
		{
			id: "1",
			label: "Mes questions",
			value: "value1",
		},
		{
			id: "2",
			label: "Réponses à mes questions",
			value: "value2",
		},
		{
			id: "3",
			label: "Posts suivis",
			value: "value3",
		},
	]);

	const [selectedId, setSelectedId] = useState();

	return (
		<>
			<SafeArea>
				<ScrollView>
					<TitleBlock>
						<Title>Pseudonyme</Title>
					</TitleBlock>
					<InteractionText>Mes interactions</InteractionText>
					<RadioGroup
						radioButtons={radioButtons}
						onPress={setSelectedId}
						selectedId={selectedId}
						containerStyle={{
							alignItems: "left",
						}}
					/>
					<MessageView>
						<ForumMessage
							subject={"Réponse loremp"}
							message={
								"Lorem ipsum dolor sit amet consectetur. Ultrices est elit ......."
							}
							icon={false}
						/>
						<ForumMessage
							subject={"Réponse loremp"}
							message={
								"Lorem ipsum dolor sit amet consectetur. Ultrices est elit ......."
							}
							icon={false}
						/>
						<ForumMessage
							subject={"Réponse loremp"}
							message={
								"Lorem ipsum dolor sit amet consectetur. Ultrices est elit ......."
							}
							icon={false}
						/>
						<ForumMessage
							subject={"Réponse loremp"}
							message={
								"Lorem ipsum dolor sit amet consectetur. Ultrices est elit ......."
							}
							icon={false}
						/>
						<ForumMessage
							subject={"Réponse loremp"}
							message={
								"Lorem ipsum dolor sit amet consectetur. Ultrices est elit ......."
							}
							icon={false}
						/>
						<ForumMessage
							subject={"Réponse loremp"}
							message={
								"Lorem ipsum dolor sit amet consectetur. Ultrices est elit ......."
							}
							icon={false}
						/>
						<ForumMessage
							subject={"Réponse loremp"}
							message={
								"Lorem ipsum dolor sit amet consectetur. Ultrices est elit ......."
							}
							icon={false}
						/>
						<ForumMessage
							subject={"Réponse loremp"}
							message={
								"Lorem ipsum dolor sit amet consectetur. Ultrices est elit ......."
							}
							icon={false}
						/>
						<ForumMessage
							subject={"Réponse loremp"}
							message={
								"Lorem ipsum dolor sit amet consectetur. Ultrices est elit ......."
							}
							icon={false}
						/>
					</MessageView>
				</ScrollView>
			</SafeArea>
		</>
	);
};
