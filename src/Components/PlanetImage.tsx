import { Box, Image } from "@chakra-ui/react";

const PlanetImage = () => {
  return (
    <>
      <Box className="planet-img--container">
        <Image className="planet-img" src="./src/assets/planet-mercury.svg" />
      </Box>
    </>
  );
};

export default PlanetImage;
