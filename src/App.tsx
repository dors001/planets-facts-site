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
import PlanetInfo from "./Components/PlanetInfo";
import Fact from "./Components/Fact";

function App() {
  const lorem =" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem obcaecati accusantium consectetur ducimus laboriosam, iure dignissimos optio quas ullam distinctio architecto facere adipisci pariatur. Quos dolores maxime consequuntur quidem esse. Iure porro, ducimus fugiat nemo ullam quaerat, quibusdam recusandae consectetur laboriosam aliquid velit rem sed excepturi sint doloremque praesentium minima architecto illo veritatis. Veritatis aliquam aliquid, mollitia quod similique aspernatur!"
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
              <PlanetInfo planetName="Mercury" planetInfo={lorem} source="Wikipedia"/>
              <Box className="planet-facts--container">
                <Fact factTitle="ROTATION TIME" factNumbers="58.6 DAYS" />
                <Fact factTitle="ROTATION TIME" factNumbers="58.6 DAYS" />
                <Fact factTitle="ROTATION TIME" factNumbers="58.6 DAYS" />
                <Fact factTitle="ROTATION TIME" factNumbers="58.6 DAYS" />
              </Box>
            </Box>
          </Grid>
      </VStack>
    </>
  );
}

export default App;
