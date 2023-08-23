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

const NavBar = () => {
  return (
    <>
      <Show breakpoint="(max-width: 425px)">
        <Menu>
          <MenuButton
            className="nav--btn"
            as={IconButton}
            aria-label="Plantes"
            icon={<Image src="../src/assets/icon-hamburger.svg" />}
          />
          <MenuList className="nav--menu-list">
            <MenuItems
              planetName="mercury"
              circleBgColor={theme.colors.brand.mercury}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              planetName="venus"
              circleBgColor={theme.colors.brand.venus}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              planetName="earth"
              circleBgColor={theme.colors.brand.earth}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              planetName="mars"
              circleBgColor={theme.colors.brand.mars}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              planetName="jupiter"
              circleBgColor={theme.colors.brand.jupiter}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              planetName="saturn"
              circleBgColor={theme.colors.brand.saturn}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
              planetName="uranus"
              circleBgColor={theme.colors.brand.uranus}
            />
            <Divider maxW="90%" margin="1.5rem 2rem" />
            <MenuItems
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
