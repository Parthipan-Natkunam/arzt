import React from 'react';

import { ThemeProvider } from 'styled-components';

const theme =  {
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
    primary: "#0070f3",
    secondary: "#004081",
    tertiary: "#00f557",
    success: "#4caf50",
    info: "#2196f3",
    warning: "#ffeb3b",
    danger: "#f44336",
  },
  default: {
    textColor: "#000",
    backgroundColor: "#fff",
    fontSize: "1rem",
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}