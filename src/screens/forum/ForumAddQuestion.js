import React, { useState, useMemo } from "react";
import { styled } from "styled-components/native";
import { Dimensions, ScrollView, SafeAreaView } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SafeArea = styled.SafeAreaView`
	width: ${windowWidth * 0.75}px;
	flex: 1;
	align-items: center;
	margin: auto;
`;

const TitleBlock = styled.View`
	width: ${windowWidth * 0.75}px;
	margin: 20px auto 40px;
	border-bottom-width: 2px;
	border-top-width: 2px;
	padding: 20px 0;
`;

const Title = styled.Text`
	text-align: center;
	font-size: 23px;
	font-family: ${(props) => props.theme.fonts.headingBold};
`;

const CategoryBlock = styled.View`
	flex-direction: row;
	width: 100%;
	gap: 10px;
	padding: 3px 10px;
	padding-right: 0;
	background-color: #fff;
	border: solid 2px #a3a3a3;
	border-radius: 10px;
`;

const CategoryImageBlock = styled.View`
	justify-content: center;
	align-items: center;
	background-color: #757575;
	border: solid 2px #000;
	border-radius: 100px;
	width: 50px;
	aspect-ratio: 1 / 1;
	padding: 10px;
`;

const CategoryIcon = styled.Image`
	width: 100%;
	height: 100%;
	transform: rotate(45deg);
`;

const CategoryTitle = styled.Text`
	font-size: ${(props) => props.theme.fontSizes.medium};
	font-family: ${(props) => props.theme.fonts.headingBold};
`;
const SubTitleInfoView = styled.View`
	width: 100%;
	padding: 20px 0;
	margin-bottom: 20px;
	border-bottom-width: 2px;
	border-bottom-color: black;
	border-top-width: 2px;
	border-top-color: black;
	background-color: white;
`;
const SubTitleInfoText = styled.Text`
	width: ${windowWidth * 0.75}px;
	margin: auto;
	font-size: ${(props) => props.theme.fontSizes.title};
	font-family: ${(props) => props.theme.fonts.headingBold};
`;

export const ForumAddQuestion = () => {
	return (
		<>
			<ScrollView>
				<SafeArea>
					<TitleBlock>
						<Title>Votre question</Title>
					</TitleBlock>
				</SafeArea>
				<SubTitleInfoView>
					<SubTitleInfoText>Titre:</SubTitleInfoText>
				</SubTitleInfoView>
				<SafeArea>
					<CategoryBlock>
						<CategoryImageBlock>
							<CategoryIcon
								source={require("../../img/sagittarius-symbol.png")}
							/>
						</CategoryImageBlock>
						<CategoryTitle>Catégories</CategoryTitle>
					</CategoryBlock>
				</SafeArea>
				<SubTitleInfoView>
					<SubTitleInfoText>Description:</SubTitleInfoText>
				</SubTitleInfoView>
			</ScrollView>
		</>
	);
};
