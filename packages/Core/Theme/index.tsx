import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "@arzt/core";

export const ArztDefaultTheme: Theme = {
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  headings: {
    h1: {
      fontSize: "2.75rem",
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.75rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
  },
  fontSize: {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    primary: "#2D628F",
    secondary: "#716BA8",
    tertiary: "#D171A4",
    success: "#22CBA0",
    info: "#0086AC",
    warning: "#D6A251",
    danger: "#A33B3F",
    disabled: "#A0ACBD",
  },
  default: {
    textColor: "#373728",
    textColorInverted: "#F4FAFF",
    backgroundColor: "#EFF6F4",
    fontSize: "1rem",
  },
};

export type ArztThemeProviderProps = {
  children: ReactNode;
  theme?: Theme;
};

export const ArztThemeProvider: FC<ArztThemeProviderProps> = ({
  children,
  theme = ArztDefaultTheme,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
