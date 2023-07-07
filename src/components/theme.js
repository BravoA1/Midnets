import styled from "styled-components/native";

export const H1 = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-size: ${(props) => props.theme.sizes[2]};
  text-align: center;
`;
