import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { styled } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const Title = styled.View`
	width: 100%;
	align-items: flex-start;
`;

const HeaderTitle = styled.Text`
	padding: 0px 2px 0px 5px;
`;

const TextContainer = styled.View`
	width: ${screenWidth * 0.75}px;
`;

const TextTitle = styled.View`
	background-color: ${(props) => props.theme.colors.border.quaternary};
	border-radius: 10px 10px 0px 0px;
	padding: 10px 0px 20px 10px;
`;

const HeaderText = styled.Text`
	font-family: ${(props) => props.theme.fonts.headingRegular};
	color: ${(props) => props.theme.colors.text.secondary};
`;

const Body = styled.View`
	padding: 10px 0px 40px 10px;
	text-align: center;
	border-radius: 0px 0px 10px 10px;
	background-color: ${(props) => props.theme.colors.border.five};
`;

const TextBody = styled.Text`
	font-family: ${(props) => props.theme.fonts.body};
`;

const LastPostDate = styled.View`
	position: absolute;
	bottom: 0;
	right: 0;
`;

const DatePost = styled.Text`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.little};
	color: ${(props) => props.theme.colors.text.primary};
	margin-left: auto;
	padding: 0px 10px 5px 0px;
`;

const ContainerCom = styled.View`
	width: ${screenWidth * 0.75}px;
	flex-direction: row;
	align-items: center;
	padding: 10px;
`;

const IconContainer = styled.View`
	margin-left: auto;
`;

const TextCommentaire = styled.Text`
	font-family: ${(props) => props.theme.fonts.body};
	color: ${(props) => props.theme.colors.text.primary};
`;

const BorderBottom = styled.View`
	width: ${screenWidth * 0.75}px;
	border-bottom-width: 2px;
	border-bottom-color: ${(props) => props.theme.colors.text.primary};
`;

export const ForumHeader = ({
	headerTitle,
	headerText,
	bodyText,
	datePost,
	numberCom,
}) => {
	return (
		<View>
			<Title>
				<LinearGradient
					style={{ borderRadius: 8 }}
					colors={["white", "#D8C2EF"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
				>
					<HeaderTitle>{headerTitle}</HeaderTitle>
				</LinearGradient>
			</Title>
			<TextContainer>
				<TextTitle>
					<HeaderText>{headerText}</HeaderText>
				</TextTitle>
				<Body>
					<TextBody>{bodyText}</TextBody>
					<LastPostDate>
						<DatePost>{datePost}</DatePost>
					</LastPostDate>
				</Body>
			</TextContainer>
			<ContainerCom>
				<TextCommentaire>{numberCom}</TextCommentaire>
				<IconContainer>
					<Ionicons name="funnel-outline" size={24} color="black" />
				</IconContainer>
			</ContainerCom>
			<BorderBottom></BorderBottom>
		</View>
	);
};
