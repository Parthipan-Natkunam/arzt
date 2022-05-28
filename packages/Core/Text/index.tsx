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
  font-size: ${(props) =>
    props.isHeading
      ? props.theme.headings[props.element].fontSize
      : props.size
      ? props.theme.fontSize[props.size as string]
      : props.theme.default.fontSize};
  font-weight: ${(props) =>
    props.isHeading
      ? props.theme.fontWeight.bold
      : props.weight
      ? props.theme.fontWeight[props.weight as string]
      : props.theme.fontWeight.normal};
  color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.default.textColor};
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
  let isHeading: boolean = false;
  if (/^h\d{1}$/.test(as)) {
    isHeading = true;
  }
  return (
    <Tag
      size={size}
      variant={variant}
      margin={margin}
      padding={padding}
      weight={weight}
      isHeading={isHeading}
      element={as}
    >
      {children}
    </Tag>
  );
};
