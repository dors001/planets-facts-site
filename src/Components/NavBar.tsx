import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Image,
  Divider,
  Show,
  Link,
  Flex,
  Box,
} from "@chakra-ui/react";
import theme from "../theme";
import MenuItems from "./MenuItems";

const NavBar = () => {
  return (
    <>
      <Show below="sm">
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
      <Show breakpoint="(min-width: 480px)">
        <Box className="nav">
          <Flex className="nav--links" textStyle="body">
            <Link>{"mercury".toUpperCase()}</Link>
            <Link>{"venus".toUpperCase()}</Link>
            <Link>{"earth".toUpperCase()}</Link>
            <Link>{"mars".toUpperCase()}</Link>
            <Link>{"jupiter".toUpperCase()}</Link>
            <Link>{"saturn".toUpperCase()}</Link>
            <Link>{"uranus".toUpperCase()}</Link>
            <Link>{"neptune".toUpperCase()}</Link>
          </Flex>
        </Box>
        <Divider />
      </Show>
    </>
  );
};

export default NavBar;
