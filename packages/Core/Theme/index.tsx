import React, { FC, ReactNode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme } from "@arzt/core";

export const ArztDefaultTheme: Theme = {
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    xxl: "2rem",
  },
  headings: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.75rem",
    },
    h3: {
      fontSize: "2.5rem",
    },
    h4: {
      fontSize: "2rem",
    },
    h5: {
      fontSize: "1.75rem",
    },
    h6: {
      fontSize: "1.5rem",
    },
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.9rem",
    md: "1rem",
    lg: "1.25rem",
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
  fontCSSURL?: string;
  fontNames?: string[];
};

const CSSReset = createGlobalStyle<{ fontURL: string; fontNames: string[] }>`
/* Custom Fonts */
@import url('${(props) => props.fontURL}');

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: ${(props) => props.fontNames.join(", ")};
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: inline-block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export const ArztThemeProvider: FC<ArztThemeProviderProps> = ({
  children,
  theme = ArztDefaultTheme,
  fontCSSURL = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
  fontNames = ["Roboto", "sans-serif"],
}) => (
  <ThemeProvider theme={theme}>
    <CSSReset fontURL={fontCSSURL} fontNames={fontNames} />
    {children}
  </ThemeProvider>
);
