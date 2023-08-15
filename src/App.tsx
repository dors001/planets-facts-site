import {
  Box,
  Flex,
  VStack,
  Collapse,
  Link,
  Show,
  useDisclosure,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import "./index.css";
import theme from "./theme";
import Logo from "./Components/Logo";

function App() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <VStack>
        <Show below="sm">
          <Flex className="header">
            <Logo />
            <Flex
              className="nav"
              backgroundColor={theme.color.brand.bgBlue}
              textStyle="body"
            >
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
              <Show below="lg">
                <Button onClick={onToggle}>Click Me</Button>
                <Collapse in={isOpen} animateOpacity>
                  <Link>{"mercury".toUpperCase()}</Link>
                  <Link>{"venus".toUpperCase()}</Link>
                  <Link>{"earth".toUpperCase()}</Link>
                  <Link>{"mars".toUpperCase()}</Link>
                  <Link>{"jupiter".toUpperCase()}</Link>
                  <Link>{"saturn".toUpperCase()}</Link>
                  <Link>{"uranus".toUpperCase()}</Link>
                  <Link>{"neptune".toUpperCase()}</Link>
                </Collapse>
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
