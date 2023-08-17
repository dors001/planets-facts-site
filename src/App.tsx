import { Box, Flex, VStack, Grid } from "@chakra-ui/react";
import "./App.css";
import "./index.css";
import InfoButtons from "./Components/InfoButtons";
import PlanetImage from "./Components/PlanetImage";
import PlanetInfo from "./Components/PlanetInfo";
import Fact from "./Components/Fact";
import Header from "./Components/Header";

function App() {
  const lorem =
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem obcaecati accusantium consectetur ducimus laboriosam, iure dignissimos optio quas ullam distinctio architecto facere adipisci pariatur. Quos dolores maxime consequuntur quidem esse. Iure porro, ducimus fugiat nemo ullam quaerat, quibusdam recusandae consectetur laboriosam aliquid velit rem sed excepturi sint doloremque praesentium minima architecto illo veritatis. Veritatis aliquam aliquid, mollitia quod similique aspernatur!";
  return (
    <>
      <VStack>
        <Header />
        <InfoButtons />
        <Grid
          templateAreas={{
            base: `"planetImg" "infoText" "facts"`,
          }}
          templateColumns={{
            base: "1fr",
          }}
        >
          <Box className="facts-container" margin="1rem">
            <PlanetImage />
            <PlanetInfo
              planetName="Mercury"
              planetInfo={lorem}
              source="Wikipedia"
            />
            <Flex className="planet-facts--container">
              <Fact factTitle="ROTATION TIME" factNumbers="58.6 DAYS" />
              <Fact factTitle="ROTATION TIME" factNumbers="58.6 DAYS" />
              <Fact factTitle="ROTATION TIME" factNumbers="58.6 DAYS" />
              <Fact factTitle="ROTATION TIME" factNumbers="58.6 DAYS" />
            </Flex>
          </Box>
        </Grid>
      </VStack>
    </>
  );
}

export default App;
