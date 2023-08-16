import {
  Box,
  Flex,
  VStack,
  Link,
  Show,
  Image,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import "./App.css";
import "./index.css";
import Logo from "./Components/Logo";
import NavBar from "./Components/NavBar";
import InfoButtons from "./Components/InfoButtons";
import PlanetImage from "./Components/PlanetImage";

function App() {
  return (
    <>
      <VStack>
          {/* <Show breakpoint="(max-width: 425px)">
            <Flex className="header">
              <Logo />
              <NavBar />
            </Flex>
          </Show> */}
          {/* <Show breakpoint="(min-width: 426px) and (max-width: 1023px)">
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
          </Show> */}
          {/* <Show breakpoint="(max-width: 767px)">
            <InfoButtons />
          </Show>
          <Show breakpoint="(min-width: 768px) and (max-width: 1023px)">
            <InfoButtons />
          </Show>
          <Show above="lg">
            <InfoButtons />
          </Show> */}
          <Grid templateAreas={{
            base: `"planetImg" "infoText" "facts"`
          }}
          templateColumns={{
            base: "1fr"
          }}
          >
            <Box className="facts-container" margin="1rem">
              <PlanetImage />
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
            </Box>
          </Grid>
      </VStack>
    </>
  );
}

export default App;
