import React, { useState, useMemo } from "react";
import { styled } from "styled-components/native";
import { Dimensions, ScrollView, SafeAreaView, TextInput } from "react-native";
import InputForm from "../../components/InputForm";
import RadioGroup from "react-native-radio-buttons-group";
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Background = styled.Image`
	position: absolute;
	top: 0;
	width: ${windowWidth}px;
	height: ${windowHeight}px;
	min-height: ${windowHeight}px;
`;

const SafeArea = styled(SafeAreaView)`
	width: ${windowWidth * 0.75}px;
	flex: 1;
	align-items: center;
	margin: auto;
`;

const ContainerView = styled.View`
	gap: 30px;
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
	background-color: ${(props) => props.theme.colors.text.secondary};
	border: solid 2px ${(props) => props.theme.colors.border.tertiary};
	border-radius: 10px;
`;

const CategoryImageBlock = styled.View`
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.border.secondary};
	border: solid 2px ${(props) => props.theme.colors.text.primary};
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
	border-bottom-width: 2px;
	border-bottom-color: ${(props) => props.theme.colors.text.primary};
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

const DescribeInput = styled.TextInput`
	width: ${windowWidth * 0.75}px;
	padding: 10px;
	background-color: ${(props) => props.theme.colors.text.secondary};
	border: 1px solid black;
	${Platform.OS === "android" && "textAlignVertical: bottom"};
	${(Platform.OS === "ios" && "marginTop: auto", "height: 188px")};
	text-align: center;
`;

const RadioView = styled.View`
	width: ${windowWidth * 0.75}px;
	margin: auto;
	margin-top: 10px;
`;

const bg = require("../../img/background3.png");

export const ForumAddQuestion = () => {
	const [info, setInfo] = useState({ email: "", password: "" });
	const [selectedId, setSelectedId] = useState();
	const [value, setValue] = useState("");

	// style pour les différents boutton radio
	const styleRadioButton = {
		borderSize: 2,
		borderColor: `#9275B2`,
		color: "black",
		containerStyle: {
			fontFamily: "Lora_700Bold",
			marginRight: "auto",
			marginBottom: 15,
		},
	};
	// valeur  des bouttons radio
	const radioButtons = useMemo(() => [
		{
			id: "1",
			label: "Anonyme",
			value: "anonyme",
			...styleRadioButton,
		},
	]);
	return (
		<>
			<Background source={bg} />
			<ScrollView>
				<KeyboardAwareScrollView
					extraScrollHeight={-50}
					showsVerticalScrollIndicator={false}
				>
					<SafeArea>
						<TitleBlock>
							<Title>Votre question</Title>
						</TitleBlock>
					</SafeArea>
					<ContainerView>
						<SubTitleInfoView>
							<SubTitleInfoText>Titre :</SubTitleInfoText>
						</SubTitleInfoView>
						<SafeArea>
							<InputForm
								type="text"
								placeholder="question"
								setInfo={setInfo}
								info={info}
							/>
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
							<SubTitleInfoText>Description :</SubTitleInfoText>
						</SubTitleInfoView>
						<SafeArea>
							<DescribeInput
								editable
								multiline
								numberOfLines={10}
								maxLength={360}
								onChangeText={(text) => setValue(text)}
								placeholder="Entrez votre description"
							/>
							<RadioView>
								<RadioGroup
									radioButtons={radioButtons}
									onPress={setSelectedId}
									selectedId={selectedId}
								/>
							</RadioView>
						</SafeArea>
					</ContainerView>
				</KeyboardAwareScrollView>
			</ScrollView>
		</>
	);
};
