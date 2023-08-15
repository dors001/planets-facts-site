import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import "./App.css";
import theme from "./theme";

function App() {
  return (
    <>
      <VStack>
        <HStack className="header" backgroundColor="yellow">
          <Flex>
            <Box className="logo" backgroundColor="blue" textStyle="h2">
              Logo
            </Box>
            <Box className="nav" backgroundColor={theme.color.brand.bgBlue} textStyle="body">
              nav
            </Box>
          </Flex>
        </HStack>
      </VStack>
    </>
  );
}

export default App;
