import React from "react";

import { ArztThemeProvider } from "@arzt/core/Theme";

export const decorators = [
  (Story) => (
    <ArztThemeProvider>
      <Story />
    </ArztThemeProvider>
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
  backgrounds: {
  default: 'Atzt Default Background',
    values: [
      {
        name: 'Atzt Default Background',
        value: '#EFF6F4',
      }
    ],
  },
};
