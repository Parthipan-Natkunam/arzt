import * as React from "react";
import styled from "styled-components";
import { Space, Variant } from "@arzt/core";

export type LinkProps = {
  href: string;
  target: "_blank" | "_self" | "_parent" | "_top";
  margin?: Space;
  padding?: Space;
  children: React.ReactNode;
  underline?: boolean;
  variant?: Variant;
};

const StyledLink = styled.a<Omit<LinkProps, "href" | "target">>`
  display: inline-block;
  color: ${(props) =>
    props.variant
      ? props.theme.colors[props.variant]
      : props.theme.colors.primary};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const Link: React.FC<LinkProps> = ({
  href,
  target,
  children,
  margin,
  padding,
  underline,
  variant,
}) => {
  return (
    <StyledLink
      href={href}
      target={target}
      margin={margin}
      padding={padding}
      underline={underline}
      variant={variant}
    >
      {children}
    </StyledLink>
  );
};
