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
`;

const BackgroundWhite = styled.View`
	background-color: #ffffff;
	width: 100%;
	${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;

const Background = styled.Image`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	min-height: ${windowHeight}px;
`;

const TitleBlock = styled.View`
	width: ${windowWidth * 0.75}px;
	margin: 20px auto 40px;
	border-bottom-width: 2px;
	border-top-width: 2px;
	padding: 20px 50px;
`;

const Title = styled.Text`
	text-align: center;
	font-size: 23px;
	font-family: ${(props) => props.theme.fonts.headingBold};
`;

const InteractionText = styled.Text`
	text-align: center;
	font-family: ${(props) => props.theme.fonts.headingRegular};
	font-size: ${(props) => props.theme.fontSizes.title};
	margin-bottom: 20px;
`;

const MessageView = styled.View`
	gap: 20px;
	padding-top: 20px;
`;

const RadioView = styled.View`
	width: ${windowWidth * 0.75}px;
	margin: auto;
	margin-bottom: -1px;
	border-bottom-width: 2px;
	border-bottom-color: black;
`;

const BackgroundSquare = styled.Image`
	margin-right: auto;
	margin-left: 40px;
	margin-top: -120px;
	width: 120px;
	height: 150px;
	z-index: -1;
	transform: rotate(-90deg);
`;

export const ForumInteraction = () => {
	// style pour les différents boutton radio
	const styleRadioButton = {
		borderSize: 2,
		borderColor: `#9275B2`,
		color: "black",
		containerStyle: {
			marginRight: "auto",
			marginBottom: 15,
		},
	};
	// valeur  des bouttons radio
	const radioButtons = useMemo(() => [
		{
			id: "1",
			label: "Mes questions",
			value: "value1",
			...styleRadioButton,
		},
		{
			id: "2",
			label: "Réponses à mes questions",
			value: "value2",
			...styleRadioButton,
		},
		{
			id: "3",
			label: "Posts suivis",
			value: "value3",
			...styleRadioButton,
		},
	]);

	const [selectedId, setSelectedId] = useState();

	const bg = require("../../img/background2.png");
	const bgScare = require("../../img/square.png");

	return (
		<>
			<Background source={bg} />
			<ScrollView>
				<BackgroundWhite>
					<SafeAreaView>
						<TitleBlock>
							<Title>Pseudonyme</Title>
						</TitleBlock>
						<InteractionText>Mes interactions</InteractionText>
						<RadioView>
							<RadioGroup
								radioButtons={radioButtons}
								onPress={setSelectedId}
								selectedId={selectedId}
							/>
						</RadioView>
					</SafeAreaView>
				</BackgroundWhite>
				<SafeArea>
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
				</SafeArea>
				<BackgroundSquare source={bgScare} />
			</ScrollView>
		</>
	);
};
