import React, { useState } from "react";
import { styled } from "styled-components/native";
import { TitleBlock } from "../../components/TitleBlock";
import {
	StatusBar,
	SafeAreaView,
	View,
	StyleSheet,
	Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	align-items: center;
	margin: auto;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Scrollable = styled.ScrollView`
	flex: 1;
	width: 100%;
	height: 100%;
`;

const Background = styled.Image`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	min-height: ${windowHeight}px;
`;

const Container = styled.View`
	flex: 1;
	width: 100%;
	height: 100%;
	align-items: center;
	margin: auto;
`;

const ContainerSearchAndInterraction = styled.View`
	flex-direction: column;
	align-items: center;
`;

const SearchContainer = styled.View`
	width: 85%;
	position: relative;
	flex-direction: row;
	align-items: center;
	border-radius: 16px;
`;

const FilterIcon = styled.View`
	margin-right: 10px;
	justify-content: center;
	align-items: center;
`;

const SearchInput = styled.TextInput`
	width: 85%;
	height: 36px;
	border-radius: 20px;
	font-size: 16px;
	border: solid 2px ${(props) => props.theme.colors.border.primary};
	padding-left: 15px;
	background-color: rgba(217, 217, 217, 0.4);
`;

const IconView = styled.View`
	position: absolute;
	top: 6.5px;
	right: 2px;
	width: 32px;
	height: 32px;
	border-radius: 16px;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.bg.tertiary};
`;

const InteractionButton = styled.TouchableOpacity`
	width: ${windowWidth * 0.5}px;
	margin: 20px 0px;
	background-color: ${(props) => props.theme.colors.bg.five};
	padding: 6px 0px;
	border-radius: 16px;
	align-items: center;
	margin-left: auto;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	elevation: 20;
`;

const InteractionText = styled.Text`
	color: white;
	font-family: ${(props) => props.theme.fonts.headingBold};
`;

const Menu = styled.SafeAreaView`
	padding: 0px 10px;
	width: 90%;
`;

const Title = styled.TouchableOpacity`
	width: 100%;
	margin-bottom: 10px;
`;

const TitleContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const TitleText = styled.Text`
	font-family: ${(props) => props.theme.fonts.headingBold};
	font-size: ${windowWidth * 0.075}px;
	color: ${(props) => props.theme.colors.text.tertiary};
`;

const Option = styled.View`
	margin-bottom: 10px;
	border-radius: 10px;
	elevation: 15;
`;

const OptionText = styled.Text`
	padding: 2px 0px 2px 20px;
	font-family: ${(props) => props.theme.fonts.body};
	color: ${(props) => props.theme.colors.text.quaternary};
`;

const BackgroundSquare = styled.Image`
	margin-right: auto;
	margin-left: 10px;
	margin-top: 20px;
	width: 170px;
	height: 100px;
`;

const bg = require("../../img/background2.png");
const bgS = require("../../img/square.png");

const Data = [
	{
		title: "Vous protéger",
		options: [
			{
				title: "Les espaces dédués à vous aider",
				navigate: "ForumConversationHelp",
			},
			{
				title: "Les textes de lois à connaître",
				navigate: "ForumConversationHelp",
			},
			{ title: "Les lieux où se réfugier", navigate: "ForumConversationHelp" },
			{ title: "Lorem ipsum", navigate: "ForumConversationHelp" },
		],
	},
	{
		title: "Catégorie lorem",
		options: [
			{ title: "Lorem ipsum", navigate: "ForumConversation" },
			{ title: "Lorem ipsum", navigate: "ForumConversation" },
			{ title: "Lorem ipsum", navigate: "ForumConversation" },
			{ title: "Lorem ipsum", navigate: "ForumConversation" },
		],
	},
	{
		title: "Catégorie lorem",
		options: [
			{ title: "Lorem ipsum", navigate: "ForumResponse" },
			{ title: "Lorem ipsum", navigate: "ForumResponse" },
			{ title: "Lorem ipsum", navigate: "ForumResponse" },
			{ title: "Lorem ipsum", navigate: "ForumResponse" },
		],
	},
	{
		title: "Catégorie lorem",
		options: [
			{ title: "Lorem ipsum", navigate: "ForumAddQuestion" },
			{ title: "Lorem ipsum", navigate: "ForumAddQuestion" },
			{ title: "Lorem ipsum", navigate: "ForumAddQuestion" },
			{ title: "Lorem ipsum", navigate: "ForumAddQuestion" },
		],
	},
];

export const Forum = ({ navigation }) => {
	const [expandedMenu, setExpandedMenu] = useState({ 0: true });

	// Utilisez useFocusEffect pour réinitialiser l'état lorsque le composant obtient le focus
	useFocusEffect(
		React.useCallback(() => {
			setExpandedMenu({ 0: true }); // Réinitialise l'état, ouvrez le premier élément par défaut
		}, [])
	);

	const toggleMenu = (i) => {
		setExpandedMenu((prevState) => {
			// Copie l'état précédent
			const newState = { ...prevState };

			// Ferme tous les titres sauf celui sur lequel on a cliqué
			Object.keys(newState).forEach((key) => {
				if (key !== i.toString()) {
					newState[key] = false;
				}
			});

			// Ouvre ou ferme le titre sur lequel on a cliqué
			newState[i] = !prevState[i];

			return newState;
		});
	};

	return (
		<>
			<Background source={bg} />
			<SafeArea>
				<Scrollable>
					<Container>
						<View style={styles.containerCenter}>
							<TitleBlock title="Forum" />
						</View>
						<ContainerSearchAndInterraction>
							<SearchContainer>
								<FilterIcon>
									<Ionicons name="funnel-outline" size={42} color="black" />
								</FilterIcon>
								<SearchInput
									placeholder="Recherche"
									placeholderTextColor={"rgba(0, 0, 0, 0.25)"}
								></SearchInput>
								<IconView>
									<Ionicons name="ios-search" size={20} color="black" />
								</IconView>
							</SearchContainer>
							<InteractionButton
								onPress={() => navigation.navigate("ForumInteraction")}
								style={{
									shadowColor: "#000",
									shadowOffset: { width: 0, height: 4 },
									shadowOpacity: 0.25,
									shadowRadius: 4,
								}}
								activeOpacity={0.8}
							>
								<InteractionText>Mes interactions</InteractionText>
							</InteractionButton>
						</ContainerSearchAndInterraction>
						{Data.map((section, i) => (
							<Menu key={i}>
								<Title onPress={() => toggleMenu(i)}>
									<TitleContainer>
										<TitleText>{section.title}</TitleText>
										<Ionicons
											name={expandedMenu[i] ? "ios-caret-up" : "ios-caret-down"}
											size={24}
											color="#686868"
										/>
									</TitleContainer>
								</Title>

								{expandedMenu[i] && (
									<View>
										{section.options.map((option, optionI) => (
											<TouchableOpacity
												key={optionI}
												onPress={() => navigation.navigate(option.navigate)}
											>
												<Option
													style={{
														shadowColor: "#000",
														shadowOffset: { width: 0, height: 4 },
														shadowOpacity: 0.25,
														shadowRadius: 4,
													}}
												>
													<LinearGradient
														style={{ borderRadius: 10 }}
														colors={["white", "#D8C2EF"]}
														start={{ x: 0, y: 0 }}
														end={{ x: 1, y: 0 }}
													>
														<OptionText>{option.title}</OptionText>
													</LinearGradient>
												</Option>
											</TouchableOpacity>
										))}
									</View>
								)}
							</Menu>
						))}
					</Container>

					<BackgroundSquare source={bgS} />
				</Scrollable>
			</SafeArea>
		</>
	);
};

const styles = StyleSheet.create({
	containerCenter: {
		flex: 1,
		alignItems: "center",
	},
});
