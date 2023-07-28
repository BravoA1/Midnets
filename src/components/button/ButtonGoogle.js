import { styled } from 'styled-components'
import { LinearGradient } from 'expo-linear-gradient';

export default ButtonGoogle = ({children}) => {

  const ButtonElement = styled.TouchableOpacity`
    flex-direction: row;    
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #000;
    width: 100%;
    border-radius: 100px;
  `
  const BoxGradient = styled.View`
  width: 70%;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: 100px;
  margin-bottom: 30px;
`

const TextButtonGoogle = styled.Text`
  width: 80%;
  font-size: 14px
`

const GoogleIcon = styled.Image`
    width: 30px;
    height: 30px;
    margin-left: 30px;
    margin-right: 15px;
`

const LinearButton = styled(LinearGradient)`
  width: 100%;
  border-radius: 100px;
  padding: 0px;
`

  return (
      <BoxGradient>
        <LinearButton
            colors={["#D8C2EF", "rgba(255,255,255,0)"]}
            locations={[1, 0]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
          <ButtonElement>
            <GoogleIcon source={require('../../img/Google.png')} />
            <TextButtonGoogle>{children}</TextButtonGoogle>
          </ButtonElement>
        </LinearButton>
      </BoxGradient>
  )
}