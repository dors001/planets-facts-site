import { Box, ScaleFade, Image } from "@chakra-ui/react";

interface Props {
  ImgSrc?: string;
  inProp: boolean;
}

const PlanetImage = ({ ImgSrc, inProp }: Props) => {
  return (
    <>
      <ScaleFade initialScale={0.9} in={inProp}>
        <Box className="planet-img--container">
          <Image className="planet-img" src={ImgSrc} />
        </Box>
      </ScaleFade>
    </>
  );
};

export default PlanetImage;
