import { Box, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Props {
  planetName?: string;
  planetInfo?: string;
  source?: string;
}

const PlanetInfo = ({ planetName, planetInfo, source }: Props) => {
  return (
    <>
      <Box className="planet-info--container">
        <Box className="planet-info--title" textStyle="h1">
          {planetName?.toUpperCase()}
        </Box>
        <Text className="planet-info--content" textStyle="body">
          {planetInfo}
        </Text>
        <Box className="planet-info--source" textStyle="body">
          <Text display="inline">Source: </Text>
          <Link href="" fontWeight="bold">
            {source}
            <ExternalLinkIcon mx="2" />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default PlanetInfo;
