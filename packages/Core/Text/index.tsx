import * as React from "react";
import styled from "styled-components";
import { Size, Space, Weight, TextTags } from "@arzt/core";


export type TextProps = {
    as?: TextTags;
    variant?:
      | "primary"
      | "secondary"
      | "tertiary"
      | "success"
      | "danger"
      | "warning"
      | "info";
    size?: Size;
    padding?: Space;
    margin?: Space;
    weight?: Weight;
    children: React.ReactNode;
  };

const StyledTextFactory = (tag: any) => styled(tag)`
  margin: ${(props) => (props.margin ? props.theme.spacing[props.margin] : 0)};
  padding: ${(props) =>
    props.padding ? props.theme.spacing[props.padding] : 0};
  ${(props) =>
    props.size && `font-size: ${props.theme.fontSize[props.size as string]}`};
  ${(props) =>
    props.weight &&
    `font-weight: ${props.theme.fontWeight[props.weight as string]}`};
  color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.default.textColor || "#000"};
`;


export const Text: React.FC<TextProps> = ({
  as = "p",
  size = "md",
  variant = "primary",
  margin,
  padding,
  weight,
  children,
}) => {
  const Tag = StyledTextFactory(as);
  return (
    <Tag
      size={size}
      variant={variant}
      margin={margin}
      padding={padding}
      weight={weight}
    >
      {children}
    </Tag>
  );
};
