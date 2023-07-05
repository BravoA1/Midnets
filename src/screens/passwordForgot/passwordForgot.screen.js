import { Text, View, SafeAreaView, StatusBar, Dimensions, Button, Image } from "react-native";
import InputForm from "../../components/InputForm.js";
import { styled } from 'styled-components'

let screenWidth = Dimensions.get("window").width;
const isIos = Platform.OS === 'ios';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    margin: auto;
    width: ${screenWidth * 3 / 4}px;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`
const TitleBlock = styled.View`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    borderBottomWidth: 2px;
    borderTopWidth: 2px;
    padding: 10px 50px;
`

const Title = styled.Text`
    text-align: center;
    font-size: 25px;
`

const Logo = styled.Image`
    width: 30%;
    height: undefined;
    margin: 20px 0 ;
    aspect-ratio: 87 / 94;
`

const InfoForm = styled.Text`
    width: 100%;
    margin-top: 10px;
    font-size: 11px;
`

const InfoText = styled.Text`
    text-align: left;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 11px;
`

const ButtonForgot = styled.View`
    width: 80%;
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 100px;
    background-color: #eee;
    box-shadow: 0px 3px 1px #999;

`

export default function PasswordForgot () {
    return (
        <SafeArea>
            <TitleBlock>
                <Title>Mots de passe oublié</Title>

            </TitleBlock>
            <InputForm type='email' />
            <InfoForm>Un lien vous sera envoyé pour réinitialiser votre mot de passe à l’adresse mail utilisée pour l’inscription.</InfoForm>
            <ButtonForgot>
                <Button 
                    title="Envoyer le mail"
                    color={isIos ? '#000' : 'transparent'}
                    accessibilityLabel="Bouton pour envoyer pour changer le mots de passe"
                />
            </ButtonForgot>
            <Logo source={require('../../img/Midnets_icone.png')} />
            <InfoText>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu</InfoText>
            <InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </InfoText>
            <InfoText>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</InfoText>
        </SafeArea>
    )
}