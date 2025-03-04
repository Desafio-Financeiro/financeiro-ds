import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";

const customViewports = {
  mobile: {
    name: "Mobile Small",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "720px",
      height: "768px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1920px",
      height: "768px",
    },
  },
};

export const decorators = [
  (StoryComponent) => (
    <ThemeProvider theme={theme}>
      <StoryComponent />
    </ThemeProvider>
  ),
];

const preview = {
  parameters: {
    viewport: {
      viewports: {
        ...customViewports,
      },
    },
    backgrounds: {
      values: [
        { name: "Dark", value: "#000" },
        { name: "Light", value: "#fff" },
      ],
      default: "Light",
    },
  },
};

export default preview;
