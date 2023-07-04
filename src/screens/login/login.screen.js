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
const Logo = styled.Image`
    width: 75%;
    height: undefined;
    margin: 30px 0 35px 10px ;
    aspect-ratio: 3 / 1.095;
`

const ForgotPassword = styled.Text`
    margin-top: -10px;
    align-self: flex-end;
    text-decoration: underline;
`

const ButtonLog = styled.View`
    flex-direction: row;    
    justify-content: center;
    align-items: center;
    background-color: #eee;
    width: 70%;
    margin-top: 30px;
    border-radius: 100px;
    box-shadow: 0px 3px 1px #999;
`

const ButtonRegister = styled.View`
    width: 70%;
    margin-top: 30px;
    border-radius: 100px;
`


export default function Login () {
    return (
        <SafeArea>
            <Logo source={require('../../img/logo.png')} />
            <InputForm type='email' >adresse mail</InputForm>
            <InputForm type='password' >mots de passe</InputForm>
            <ForgotPassword>mot de passe oublié ?</ForgotPassword>
            <ButtonLog>
                <Button 
                    title="Connexion"
                    color={isIos ? '#000' : 'transparent'}
                    accessibilityLabel="Bouton pour se connecter"
                />
            </ButtonLog>
            <ButtonRegister>
                <Button 
                    title="Inscription"
                    color={isIos ? '#000' : 'transparent'}
                    accessibilityLabel="Bouton pour s'inscrire"
                />
            </ButtonRegister>
            <ButtonLog>
                <Text>G</Text>
                <Button 
                    title="Se connecter avec google"
                    color={isIos ? '#000' : 'transparent'}
                    accessibilityLabel="se connecter avec google"
                />
            </ButtonLog>
        </SafeArea>
    )
}