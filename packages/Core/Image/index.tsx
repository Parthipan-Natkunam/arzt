import * as React from "react";
import Styled from "styled-components";
import { Space } from "@arzt/core";

export type ImageProps = {
  alt: string;
  src: string;
  width?: number;
  rounded?: boolean;
  padding?: Space;
  margin?: Space;
};

const StyledImage = Styled.img<ImageProps>`
    width: ${(props) => props.width}px;
    height: auto;
    ${(props) => props.rounded && "border-radius: 50%"};
    ${(props) =>
      props.padding && `padding: ${props.theme.spacing[props.padding]}`};
    ${(props) =>
      props.margin && `margin: ${props.theme.spacing[props.margin]}`};
`;

export const Image: React.FC<ImageProps> = ({
  alt,
  src,
  width = 25,
  rounded,
  margin,
  padding,
}) => {
  return (
    <StyledImage
      alt={alt}
      src={src}
      width={width}
      rounded={rounded}
      margin={margin}
      padding={padding}
    />
  );
};
