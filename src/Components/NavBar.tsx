import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Image,
  Divider,
} from "@chakra-ui/react";
import theme from "../theme";
import MenuItems from "./MenuItems";

const NavBar = () => {
  return (
    <>
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
    </>
  );
};

export default NavBar;
