import { extendTheme, theme } from "@chakra-ui/react";

const myCustomTheme = {
  ...theme,
  styles: {
    global: {
      body: {
        bg: "bgColor",
      },
    },
  },
  fonts: {
    body: "'Roboto',system-ui, sans-serif",
    heading: "'Roboto', serif",
  },
  colors: {
    transparent: "transparent",
    blue: "#3182CE",
    black: "#000",
    white: "#fff",
    bgColor: "#141414",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
};

const customTheme = extendTheme(myCustomTheme);
export default customTheme;
