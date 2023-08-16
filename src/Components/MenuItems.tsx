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
}

const MenuItems = ({ circleBgColor, planetName }: Props) => {
  return (
    <>
      <MenuItem className="nav--menu-item">
        <Flex w="100%">
          <Box>
            <Button
              leftIcon={
                <Circle marginRight="1.4rem" size="20px" bg={circleBgColor} />
              }
              textStyle="h4"
              variant="ghost"
            >
              {planetName.toUpperCase()}
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Image src="../src/assets/icon-chevron.svg" />
          </Box>
        </Flex>
      </MenuItem>
    </>
  );
};

export default MenuItems;
