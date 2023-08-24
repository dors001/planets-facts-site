import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBar from "./NavBar";

interface Props {
  onSelectPlanet: (planetName: string) => void;
}

const Header = ({ onSelectPlanet }: Props) => {
  return (
    <>
      <Flex className="header">
        <Logo />
        <NavBar onSelectPlanet={onSelectPlanet} />
      </Flex>
    </>
  );
};

export default Header;
