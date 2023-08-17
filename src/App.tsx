import { Box, Flex, VStack, Grid, Show, GridItem } from "@chakra-ui/react";
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
        <Show below="sm">
          <InfoButtons />
        </Show>
        <Grid
          templateAreas={{
            base: `"planetImg" "infoText" "facts"`,
            md: `"planetImg planetImg" "infoText infoButtons" "facts facts"`,
            lg: `"planetImg infoText" "planetImg infoButtons" "facts facts"`,
          }}
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "1.5fr 1fr",
          }}
          templateRows={{
            base: "1fr",
            md: `400px 1fr 200px`,
            lg: `1fr 250px 200px`,
          }}
          margin="2rem"
        >
          <GridItem
            area="planetImg"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <PlanetImage />
          </GridItem>
          <GridItem area="infoText">
            <PlanetInfo
              planetName="Mercury"
              planetInfo={lorem}
              source="Wikipedia"
            />
          </GridItem>
          <Show above="md">
            <GridItem area="infoButtons" margin="auto">
              <InfoButtons />
            </GridItem>
          </Show>
          <GridItem area="facts" margin="3rem 0">
            <Flex className="planet-facts--container">
              <Fact factTitle="ROTATION TIME" factNumbers="58.6 DAYS" />
              <Fact factTitle="ROTATION TIME" factNumbers="58.6 DAYS" />
              <Fact factTitle="ROTATION TIME" factNumbers="58.6 DAYS" />
              <Fact factTitle="ROTATION TIME" factNumbers="58.6 DAYS" />
            </Flex>
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
}

export default App;
