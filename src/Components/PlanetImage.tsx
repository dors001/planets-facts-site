import { Box, Image } from "@chakra-ui/react";

interface Props {
  ImgSrc: string;
}

const PlanetImage = ({ ImgSrc }: Props) => {
  return (
    <>
      <Box className="planet-img--container">
        <Image className="planet-img" src={ImgSrc} />
      </Box>
    </>
  );
};

export default PlanetImage;
