import { useEffect, useState } from "react";
import {
  Flex,
  VStack,
  Grid,
  Show,
  GridItem,
  ScaleFade,
} from "@chakra-ui/react";
import "./App.css";
import "./index.css";
import theme from "./theme";
import InfoButtons, { Topics } from "./Components/InfoButtons";
import PlanetImage from "./Components/PlanetImage";
import PlanetInfo from "./Components/PlanetInfo";
import Fact from "./Components/Fact";
import Header from "./Components/Header";
import usePlanets, { Planet } from "./Hooks/usePlanets";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>();
  const [selectedTopic, setSelectedTopic] = useState<Topics>(Topics.overview);
  const [selectedImage, setSelectedImage] = useState<string | undefined>("");
  const [activeTopic, setActiveTopic] = useState<Topics>(Topics.overview);
  const [inProp, setInProp] = useState(true);

  const onSelectPlanet = (planetName: string) => {
    const planetData = usePlanets(planetName);
    setSelectedPlanet(planetData);
    setSelectedImage(planetData?.images.planet);
    setActiveTopic(Topics.overview);
    setInProp(false);
    setTimeout(() => {
      setInProp(true);
    }, 300);
  };

  const setPlanetInfo = (topic: Topics) => {
    let imageType: string;
    switch (topic) {
      case Topics.structure:
        imageType = "internal";
        setActiveTopic(Topics.structure);
        break;
      case Topics.surface:
        imageType = "geology";
        setActiveTopic(Topics.surface);
        break;
      default:
        imageType = "planet";
        setActiveTopic(Topics.overview);
    }

    setSelectedImage(
      selectedPlanet?.images[imageType as keyof typeof selectedPlanet.images]
    );
    setSelectedTopic(topic);
  };

  const planetInfo = selectedPlanet?.[selectedTopic].content || "";
  const source = selectedPlanet?.[selectedTopic].source || "";

  useEffect(() => {
    if (!selectedPlanet) onSelectPlanet("Mercury");
  }, []);

  return (
    <>
      <div id="background">
        <VStack>
          <Header onSelectPlanet={onSelectPlanet} />
          <Show below="sm">
            <InfoButtons
              setInfo={setPlanetInfo}
              activeTopic={activeTopic}
              planetColor={
                selectedPlanet
                  ? theme.colors.brand[selectedPlanet?.name.toLowerCase()]
                  : theme.colors.brand.mercury
              }
            />
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
                {selectedImage && (
                  <PlanetImage ImgSrc={selectedImage} inProp={inProp} />
                )}
            </GridItem>
            <GridItem area="infoText">
              <ScaleFade initialScale={0.9} in={inProp}>
                {selectedPlanet && (
                  <PlanetInfo
                    planetName={selectedPlanet?.name}
                    planetInfo={planetInfo}
                    source={source}
                    inProp={inProp}
                  />
                )}
              </ScaleFade>
            </GridItem>
            <Show above="md">
              <GridItem area="infoButtons" margin="auto">
                <ScaleFade initialScale={0.9} in={inProp}>
                  <InfoButtons
                    setInfo={setPlanetInfo}
                    activeTopic={activeTopic}
                    planetColor={
                      selectedPlanet
                        ? theme.colors.brand[selectedPlanet?.name.toLowerCase()]
                        : theme.colors.brand.mercury
                    }
                  />
                </ScaleFade>
              </GridItem>
            </Show>
            <GridItem area="facts" margin="3rem 0">
              <ScaleFade initialScale={0.9} in={inProp}>
                <Flex className="planet-facts--container">
                  {selectedPlanet && (
                    <Fact
                      factTitle="rotation time"
                      factNumbers={selectedPlanet?.rotation}
                    />
                  )}
                  {selectedPlanet && (
                    <Fact
                      factTitle="revolution time"
                      factNumbers={selectedPlanet?.revolution}
                    />
                  )}
                  {selectedPlanet && (
                    <Fact
                      factTitle="radius"
                      factNumbers={selectedPlanet?.radius}
                    />
                  )}
                  {selectedPlanet && (
                    <Fact
                      factTitle="average temp."
                      factNumbers={selectedPlanet?.temperature}
                    />
                  )}
                </Flex>
              </ScaleFade>
            </GridItem>
          </Grid>
        </VStack>
      </div>
    </>
  );
}

export default App;
