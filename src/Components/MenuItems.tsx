import {
  Image,
  MenuItem,
  Button,
  Circle,
  Box,
  Spacer,
  Flex,
} from "@chakra-ui/react";

interface Props {
  circleBgColor: string;
  planetName: string;
  onSelectPlanet: (planetName: string) => void;
}

const MenuItems = ({ circleBgColor, planetName, onSelectPlanet }: Props) => {
  return (
    <>
      <MenuItem className="nav--menu-item" bgColor="transparent" textStyle="h4">
        <Flex w="100%">
          <Box>
            <Button
              onClick={() => onSelectPlanet("")}
              leftIcon={
                <Circle marginRight="1.4rem" size="20px" bg={circleBgColor} />
              }
              variant="ghost"
            >
              {planetName.toUpperCase()}
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Image src="/assets/icon-chevron.svg" marginTop="1rem" />
          </Box>
        </Flex>
      </MenuItem>
    </>
  );
};

export default MenuItems;
