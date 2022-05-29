import * as React from "react";
import Styled from "styled-components";

export type ImageProps = {
  alt: string;
  src: string;
  width?: number;
  rounded?: boolean;
};

const StyledImage = Styled.img<ImageProps>`
    width: ${(props) => props.width}px;
    height: auto;
    border-radius: ${(props) => (props.rounded ? "50%" : "0")};
`;

export const Image: React.FC<ImageProps> = ({
  alt,
  src,
  width = 25,
  rounded,
}) => {
  return <StyledImage alt={alt} src={src} width={width} rounded={rounded} />;
};
