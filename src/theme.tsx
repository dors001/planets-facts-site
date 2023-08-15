import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/antonio/500.css";
import "@fontsource/spartan";
import "@fontsource/spartan/600.css";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      "html, body": {
        margin: "0",
        padding: "0",
        fontSize: "62.5%",
      },
    },
  },
  textStyles: {
    h1: {
      fontSize: ["4rem", "4.8rem", "8rem"],
      fontWeight: "500",
      fontFamily: "antonio, sans-serif",
    },
    h2: {
      fontSize: ["2rem", "2.4rem", "4rem"],
      fontWeight: "500",
      letterSpacing: "-1.5px",
      fontFamily: "antonio, sans-serif",
    },
    h3: {
      fontSize: ["0.9rem", "0.9rem", "1.2rem"],
      fontWeight: "600",
      letterSpacing: "2.6px",
      fontFamily: "spartan, sans-serif",
    },
    h4: {
      fontSize: ["1.5rem", "1.1rem", "1.1rem"],
      fontWeight: "600",
      letterSpacing: "1px",
      fontFamily: "spartan, sans-serif",
    },
    body: {
      fontSize: ["1.1rem", "1.1rem", "1.4rem"],
      fontWeight: "400",
      lineHeight: "2.5rem",
      fontFamily: "spartan, sans-serif",
    },
  },
  color: {
    brand: {
      white: "#ffffff",
      bgBlue: "#070724",
      darkGray: "#38384f",
      lightGray: "#838391",
      cyan: "#419rbb",
      lightOrange: "#eda249",
      purple: "#6f2ed6",
      lightRed: "#d14c32",
      red: "#d83a34",
      brown: "#cd5120",
      teal: "#1ec2a4",
      blue: "#2d68fo",
    },
  },
});

export default theme;
