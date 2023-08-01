import React from "react";
import { styled } from "styled-components/native";
import { StatusBar, SafeAreaView, Dimensions, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ForumHeader } from "../../components/forum/forumHeader";
import { ForumMessage } from "../../components/forum/forumMessage";
import { View } from "react-native";

const windowHeight = Dimensions.get("window").height;

const windowWidth = Dimensions.get("window").width;

const BackgroundWhite = styled.View`
	background-color: #ffffff;
	width: 100%;
`;

const Background = styled.Image`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	min-height: ${windowHeight}px;
`;

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	align-items: center;
	margin: auto;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const MessageView = styled.View`
	gap: 20px;
	padding-top: 20px;
`;

const bg = require("../../img/background2.png");

export const ForumConversationHelp = () => {
	return (
		<>
			<Background source={bg} />
			<ScrollView>
				<BackgroundWhite>
					<SafeArea>
						<ForumHeader
							headerTitle={"L'équipe MIDNETS"}
							headerText={"Les espaces dédiés à vous aider"}
							bodyText={
								"Vous trouverez dans cette catégorie les numéros d'aide pour les femmes ainsi que les plateformes dédiées à cet usage"
							}
							datePost={"Il y a XX jours"}
							numberCom={"XX commentaires"}
						/>
					</SafeArea>
				</BackgroundWhite>
				<MessageView>
					<ForumMessage
						subject={"SOS femmes battues"}
						message={"00.00.00.00.00"}
						icon={true}
					/>
					<ForumMessage
						subject={"SOS harcèlement de rue"}
						message={"00.00.00.00.00"}
						icon={true}
					/>
					<ForumMessage
						subject={"Réponse loremp"}
						message={"Réponse loremp"}
						icon={true}
					/>
					<ForumMessage
						subject={"Réponse loremp"}
						message={"Réponse loremp"}
						icon={true}
					/>
					<ForumMessage
						subject={"Réponse loremp"}
						message={"Réponse loremp"}
						icon={true}
					/>
					<ForumMessage
						subject={"Réponse loremp"}
						message={"Réponse loremp"}
						icon={true}
					/>
					<ForumMessage
						subject={"Réponse loremp"}
						message={"Réponse loremp"}
						icon={true}
					/>
					<ForumMessage
						subject={"Réponse loremp"}
						message={"Réponse loremp"}
						icon={true}
					/>
				</MessageView>
			</ScrollView>
		</>
	);
};
