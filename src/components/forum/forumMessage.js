import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

const MessageView = styled.View`
	width: ${screenWidth * 0.75}px;
	margin: auto;
	gap: 5px;
`;

const Title = styled.Text`
	flex: 1;
	padding: 5px 10px;
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.body};
	color: ${(props) => props.theme.colors.text.secondary};
	background-color: ${(props) => props.theme.colors.text.primary};
`;

const Icon = styled.View`
	justify-content: center;
	align-items: center;
	height: 0;
	background-color: ${(props) => props.theme.colors.text.secondary};
	padding-left: 10px;
`;

const CommentView = styled.View`
	align-items: flex-end;
	margin: auto;
	width: 100%;
`;

const CommentText = styled.Text`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.body};
`;

const ButtonSeeMore = styled.TouchableOpacity`
	width: ${screenWidth * 0.25}px;
	padding: 5px;
	margin-left: auto;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	color: ${(props) => props.theme.colors.brand.primary};
	background-color: ${(props) => props.theme.colors.brand.tertiary};
`;

const ButtonSeeMoreText = styled.Text`
	font-size: ${(props) => props.theme.fontSizes.little};
`;

export const ForumMessage = ({ subject, message, icon }) => {
	const TitleView = styled.View`
		flex-direction: row;
		margin: auto;
		overflow: hidden;
		border: solid 1px ${(props) => props.theme.colors.text.primary};
		border-radius: 8px;
		border-bottom-right-radius: 0;
		${!icon && "border-bottom-left-radius: 0;"}
		background-color: white;
	`;

	// View créer pour pouvoir utiliser le border radius
	const TextView = styled.View`
		width: ${icon ? "75%" : "100%"};
		padding: 3px 0 3px 10px;
		${!icon && "padding-right: 40px;"}
		border: solid 1px ${(props) => props.theme.colors.brand.secondary};
		border-bottom-left-radius: 10px;
		background-color: ${(props) => props.theme.colors.text.secondary};
	`;
	return (
		<MessageView>
			<TitleView>
				<Title>{subject}</Title>
				<View style={{ paddingLeft: 5 }}>
					{icon ? (
						<Ionicons name="chatbubble-ellipses" size={35} color="black" />
					) : (
						<View style={{ width: 35, height: 40 }}>
							<Text style={{ color: "white" }}>d</Text>
						</View>
					)}
				</View>
			</TitleView>
			<CommentView>
				<TextView>
					<CommentText>{message}</CommentText>
				</TextView>
			</CommentView>
			<ButtonSeeMore>
				<ButtonSeeMoreText>Voir plus ......</ButtonSeeMoreText>
			</ButtonSeeMore>
		</MessageView>
	);
};
