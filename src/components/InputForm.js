import { TextInput, View, Text } from "react-native";
import { styled } from "styled-components";

const Container = styled.View`
    margin-bottom: 20px;
`
const Label = styled.Text`
    text-align: center;
    margin-bottom: 10px;
`

const Input = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 5px;
  padding-left: 15px;
  border: solid 2px #A3A3A3;
  border-radius: 100px;
  background-color: #D9D9D9;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
`;

const IconInput = styled.Text`
    color: rgba(0, 0, 0, 0.30);
    margin-right: 15px;
    font-size: 17px;
`

const IconInputImage = styled.Image`
    margin-right: 20px;
    width: 20px;
    aspect-ratio: 1;

`

const InputContent = styled.TextInput`
    width: 90%;
    color: rgba(0, 0, 0, 0.30);
`

export default function InputForm({ children, type }) {
    const renderInput = (type) => {
        switch (type) {
            case 'email':
                // console.log('mail')
                return (
                    <Input>
                        <IconInput>@</IconInput>
                        <InputContent placeholder="email" />
                    </Input>
                );
            case 'password':
                // console.log('mot de passe')
                return (
                    <Input>
                        <IconInputImage source={require('../img/Key.png')} />
                        <InputContent secureTextEntry={true} placeholder="mot de passe" />
                    </Input>
                );
            case 'text':
                // console.log('text')
                return (
                    <Input>
                        <InputContent placeholder={children} />
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
