import { Box, Show, Text } from "@chakra-ui/react";
import "../index.css";

const Logo = () => {
  return (
    <>
      <Show breakpoint="(min-width: 480px) and (max-width: 1023px)">
        <Box className="logo">
          <Text className="logo--text" textStyle="h2">
            THE PLANETS
          </Text>
        </Box>
      </Show>
      <Show breakpoint="(max-width: 480px)">
        <Box className="logo">
          <Text className="logo--text" textStyle="h2" float="left">
            THE PLANETS
          </Text>
        </Box>
      </Show>
      <Show breakpoint="(min-width: 1024px)">
        <Box className="logo">
          <Text className="logo--text" textStyle="h2" float="left" marginLeft="2rem">
            THE PLANETS
          </Text>
        </Box>
      </Show>
    </>
  );
};

export default Logo;
