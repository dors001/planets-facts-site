import "../index.css";
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Image,
  Divider,
  Show,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import theme from "../theme";
import MenuItems from "./MenuItems";

interface Props {
  onSelectPlanet: (planetName: string) => void;
}

const NavBar = ({ onSelectPlanet }: Props) => {
  return (
    <>
      <Show breakpoint="(max-width: 425px)">
        <Menu>
          <MenuButton
            className="nav--btn"
            margin="1.7rem"
            bgColor="transparent"
            as={IconButton}
            aria-label="Planets"
            icon={<Image src="../src/assets/icon-hamburger.svg" />}
          />
          <MenuList
            className="nav--menu-list"
            bgColor={theme.colors.brand.bgBlue}
          >
            <MenuItems
              onSelectPlanet={() => onSelectPlanet("Mercury")}
              planetName="mercury"
              circleBgColor={theme.colors.brand.mercury}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              onSelectPlanet={() => onSelectPlanet("Venus")}
              planetName="venus"
              circleBgColor={theme.colors.brand.venus}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              onSelectPlanet={() => onSelectPlanet("Earth")}
              planetName="earth"
              circleBgColor={theme.colors.brand.earth}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              onSelectPlanet={() => onSelectPlanet("Mars")}
              planetName="mars"
              circleBgColor={theme.colors.brand.mars}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              onSelectPlanet={() => onSelectPlanet("Jupiter")}
              planetName="jupiter"
              circleBgColor={theme.colors.brand.jupiter}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              onSelectPlanet={() => onSelectPlanet("Saturn")}
              planetName="saturn"
              circleBgColor={theme.colors.brand.saturn}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              onSelectPlanet={() => onSelectPlanet("Uranus")}
              planetName="uranus"
              circleBgColor={theme.colors.brand.uranus}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              onSelectPlanet={() => onSelectPlanet("Neptune")}
              planetName="neptune"
              circleBgColor={theme.colors.brand.neptune}
            />
          </MenuList>
        </Menu>
      </Show>
      <Show breakpoint="(min-width: 426px) and (max-width: 1023px)">
        <Box className="nav">
          <Flex className="nav--buttons" textStyle="body" gap={4}>
            <Button
              onClick={() => onSelectPlanet("Mercury")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.mercury,
              }}
            >
              {"mercury".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Venus")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.venus,
              }}
            >
              {"venus".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Earth")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.earth,
              }}
            >
              {"earth".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Mars")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.mars,
              }}
            >
              {"mars".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Jupiter")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.jupiter,
              }}
            >
              {"jupiter".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Saturn")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.saturn,
              }}
            >
              {"saturn".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Saturn")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.uranus,
              }}
            >
              {"uranus".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Neptune")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.neptune,
              }}
            >
              {"neptune".toUpperCase()}
            </Button>
          </Flex>
        </Box>
        <Divider />
      </Show>
      <Show above="lg">
        <Box className="nav">
          <Flex className="nav--buttons" textStyle="body" gap={8}>
            <Button
              onClick={() => onSelectPlanet("Mercury")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.mercury,
              }}
            >
              {"mercury".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Venus")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.venus,
              }}
            >
              {"venus".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Earth")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.earth,
              }}
            >
              {"earth".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Mars")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.mars,
              }}
            >
              {"mars".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Jupiter")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.jupiter,
              }}
            >
              {"jupiter".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Saturn")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.saturn,
              }}
            >
              {"saturn".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Uranus")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.uranus,
              }}
            >
              {"uranus".toUpperCase()}
            </Button>
            <Button
              onClick={() => onSelectPlanet("Neptune")}
              className="nav--button"
              bgColor="transparent"
              size="lg"
              _hover={{
                borderTopColor: theme.colors.brand.neptune,
              }}
            >
              {"neptune".toUpperCase()}
            </Button>
          </Flex>
        </Box>
      </Show>
    </>
  );
};

export default NavBar;
