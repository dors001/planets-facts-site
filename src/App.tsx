import { Flex, VStack, Grid, Show, GridItem } from "@chakra-ui/react";
import "./App.css";
import "./index.css";
import InfoButtons from "./Components/InfoButtons";
import PlanetImage from "./Components/PlanetImage";
import PlanetInfo from "./Components/PlanetInfo";
import Fact from "./Components/Fact";
import Header from "./Components/Header";
import usePlanets from "./Hooks/usePlanets";

//TODO: Make the source site to be anchor text that is equale to the website title (ex: wikipedia)
//TODO: Set Background and animate it
//TODO: Fix NavBar on mobile to be full height like the design
//TODO: set nav buttons to call usePlanets with the planet name
//TODO: set info buttons to change content text and image according to the parameters
//TODO: FOCUS info buttons will fill the button with the PLANET color
//TODO: HOVER info button will fill the button with DARK GRAY color
//TODO: nav button hover will promp upper line with the planet color

function App() {
  const planet = usePlanets("Mercury");
 
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
            <PlanetImage ImgSrc={planet?.images.planet as string}/>
          </GridItem>
          <GridItem area="infoText">
            <PlanetInfo
              planetName="Mercury"
              planetInfo={planet?.overview.content as string}
              source={planet?.overview.source as string}
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
