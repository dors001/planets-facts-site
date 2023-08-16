import {
  Box,
  Flex,
  VStack,
  Link,
  Show,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import "./index.css";
import Logo from "./Components/Logo";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <VStack>
        <Show>
          <Show breakpoint="(max-width: 425px)">
            <Flex className="header">
              <Logo />
              <NavBar />
            </Flex>
          </Show>
          <Show breakpoint="(min-width: 480px) and (max-width: 1023px)">
            <Flex className="header" flexDirection="column">
              <Logo />
              <NavBar />
            </Flex>
          </Show>
          <Show breakpoint="(min-width: 1024px)">
            <Flex className="header">
              <Logo />
              <NavBar />
            </Flex>
          </Show>
          <Box className="info-buttons">
            <Button textStyle="h3" className="info-buttons--button">
              {"overview".toUpperCase()}
            </Button>
            <Button textStyle="h3" className="info-buttons--button">
              {"structure".toUpperCase()}
            </Button>
            <Button textStyle="h3" className="info-buttons--button">
              {"surface".toUpperCase()}
            </Button>
          </Box>
          <Image className="planet-img" src="./src/assets/planet-mercury.svg" />
          <Box>
            <Box textStyle="h1">{"mercury".toUpperCase()}</Box>
            <Text textStyle="body" marginBottom="3rem">
              Mercury is the smallest planet in the Solar System and the closest
              to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
              shortest of all the Sun's planets. Mercury is one of four
              terrestrial planets in the Solar System, and is a rocky body like
              Earth.
            </Text>
            <Link textStyle="body">Source</Link>
          </Box>
          <Box className="planet-facts">
            <Flex className="planet-facts--fact">
              <Text textStyle="body">{"rotation time".toUpperCase()}</Text>
              <Text textStyle="h2">58.6 DAYS</Text>
            </Flex>
            <Flex className="planet-facts--fact">
              <Text textStyle="body">{"rotation time".toUpperCase()}</Text>
              <Text textStyle="h2">58.6 DAYS</Text>
            </Flex>
            <Flex className="planet-facts--fact">
              <Text textStyle="body">{"rotation time".toUpperCase()}</Text>
              <Text textStyle="h2">58.6 DAYS</Text>
            </Flex>
            <Flex className="planet-facts--fact">
              <Text textStyle="body">{"rotation time".toUpperCase()}</Text>
              <Text textStyle="h2">58.6 DAYS</Text>
            </Flex>
          </Box>
        </Show>
      </VStack>
    </>
  );
}

export default App;
