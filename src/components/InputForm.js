import { TextInput, View, Text } from "react-native";
import { styled } from "styled-components";

const Container = styled.View`
    margin-bottom: 20px;
`
const Label = styled.Text`
    text-align: left;
    margin-bottom: 10px;
    margin-left: 15%;
    font-family: Alata_400Regular;

`

const Input = styled.View`
  flex-direction: row;
  align-items: center;
  width: 300px;
  height: 40px;
  padding: 5px;
  padding-left: 15px;
  border: solid 2px #A3A3A3;
  border-radius: 100px;
  background-color: #D9D9D9;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
`;


const IconInputImage = styled.Image`
    margin-right: 11px;
    margin-left: -5px;
    width: 20px;
    aspect-ratio: 1;

`

const InputContent = styled.TextInput`
    width: 90%;
    color: rgba(0, 0, 0, 0.30);
    font-family: Alata_400Regular;

`

const Spacer = styled.View`
    margin-right: 20px;
    width: 20px
`

export default function InputForm({ children, type, placeholder }) {
    const renderInput = (type) => {
        switch (type) {
            case 'email':
                // console.log('mail')
                return (
                    <Input>
                        <IconInputImage source={require('../img/arobase-grey.png')} />
                        <InputContent placeholder={placeholder} placeholderTextColor='rgba(0,0,0,.3)' />
                    </Input>
                );
            case 'password':
                // console.log('mot de passe')
                return (
                    <Input>
                        <IconInputImage source={require('../img/Key.png')} />
                        <InputContent secureTextEntry={true} placeholder={placeholder} placeholderTextColor='rgba(0,0,0,.3)' />
                    </Input>
                );
            case 'text':
                // console.log('text')
                return (
                    <Input>
                        <Spacer/>
                        <InputContent placeholder={placeholder} placeholderTextColor='rgba(0,0,0,.3)' />
                    </Input> 
                );
            default:
                break; 
        }
        
    }

  return (
    <Container>
        {
            children && (      
                <Label>{children}</Label>
            )
        }
      {
        renderInput(type)
      }
    </Container>
  );
}
