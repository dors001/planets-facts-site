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
          <Flex className="header">
            <Logo />
            <Flex className="nav" textStyle="body">
              <Show above="lg">
                <Link>{"mercury".toUpperCase()}</Link>
                <Link>{"venus".toUpperCase()}</Link>
                <Link>{"earth".toUpperCase()}</Link>
                <Link>{"mars".toUpperCase()}</Link>
                <Link>{"jupiter".toUpperCase()}</Link>
                <Link>{"saturn".toUpperCase()}</Link>
                <Link>{"uranus".toUpperCase()}</Link>
                <Link>{"neptune".toUpperCase()}</Link>
              </Show>
              <Show>
                <NavBar />
              </Show>
            </Flex>
          </Flex>
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
