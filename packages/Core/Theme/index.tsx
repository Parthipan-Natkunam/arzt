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
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.25rem",
    },
    h5: {
      fontSize: "1rem",
    },
    h6: {
      fontSize: "0.75rem",
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
    primary: "#3ECC46",
    secondary: "#A2AF9F",
    tertiary: "#96AFB8",
    success: "#A5D142",
    info: "#00D1FF",
    warning: "#E5D45B",
    danger: "#FF004C",
  },
  default: {
    textColor: "#373728",
    backgroundColor: "#F2FCF0",
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
