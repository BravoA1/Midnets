import { styled } from "styled-components/native";

export const CornerBlock = ({
  children,
  size,
  color,
  borderVertical,
  borderHorizontal,
}) => {
  const CornerText = styled.View`
    position: absolute;
    top: 0px;
    left: 0px;
    width: ${size};
    height: ${size};
    background-color: transparent;
    border-left-width: ${borderHorizontal};
    border-left-color: ${color};
    border-top-width: ${borderVertical};
    border-top-color: ${color};
  `;

  return (
    <>
      <CornerText />
      {children}
      <CornerText
        style={{
          transform: [{ rotate: "180deg" }],
          top: "auto",
          left: "auto",
          right: 0,
          bottom: 0,
        }}
      />
    </>
  );
};
