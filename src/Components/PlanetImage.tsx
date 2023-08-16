import { Box, GridItem, Image } from "@chakra-ui/react";

const PlanetImage = () => {
  return (
    <>
      <GridItem area="planetImg">
        <Box className="planet-img--container">
            <Image className="planet-img" src="./src/assets/planet-mercury.svg" />
        </Box>
      </GridItem>
    </>
  );
};

export default PlanetImage;
