import * as React from "react";
import styled from "styled-components";
import { Variant, Size, Space } from "@arzt/core";

type ButtonType = "button" | "submit" | "reset";

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  label: string;
  padding?: Space;
  margin?: Space;
  isLoading?: boolean;
  isDisabled?: boolean;
  outline?: boolean;
  clickHandler?: () => void;
  type?: ButtonType;
};

const StyledButton = styled.button<
  Omit<ButtonProps, "label" | "isDisabled" | "clickHandler"> & {
    isFilled: boolean;
  }
>`
  margin: ${(props) => (props.margin ? props.theme.spacing[props.margin] : 0)};
  padding: ${(props) =>
    props.padding
      ? props.theme.spacing[props.padding]
      : `${props.theme.spacing.md} ${props.theme.spacing.sm}`};
  font-size: ${(props) => props.theme.fontSize[props.size as string]};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.disabled
      : props.isFilled
      ? props.theme.colors[props.variant as Variant]
      : "transparent"};
  border-radius: 12px;
  border: 1px solid
    ${(props) =>
      props.disabled
        ? props.theme.colors.disabled
        : props.theme.colors[props.variant as Variant]};
  color: ${(props) =>
    props.isFilled || props.disabled
      ? props.theme.default.textColorInverted
      : props.theme.colors[props.variant as Variant]};
  cursor: pointer;
  pointer-events: ${(props) =>
    props.disabled || props.isLoading ? "none" : "auto"};
  opacity: ${(props) => (props.isLoading || props.disabled ? 0.5 : 1)};
  box-sizing: border-box;
  min-width: calc(
    ${(props) => props.theme.fontSize[props.size as string]} * 10
  );
  transition: scale 0.2s ease-in-out;
  &:hover {
    transform: scale(1.015);
  }
  &:active {
    transform: scale(0.985);
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  type = "button",
  label,
  padding,
  margin,
  isDisabled,
  isLoading,
  outline,
  clickHandler,
}) => {
  let derivedVariant = variant;
  const typeVariantMap: { [key in Exclude<ButtonType, 'button'>]: Variant } = {
    submit: "primary",
    reset: "danger",
  };
  if(type !== 'button' && typeVariantMap[type]) {
    derivedVariant = typeVariantMap[type];
  }

  return (
    <StyledButton
      variant={derivedVariant}
      size={size}
      padding={padding}
      margin={margin}
      isFilled={!outline}
      disabled={isDisabled}
      isLoading={isLoading}
      onClick={clickHandler}
      type={type}
    >
      {/*TODO: Replace with a spinner*/}
      {isLoading ? <span>Loading...</span> : label}
    </StyledButton>
  );
};
