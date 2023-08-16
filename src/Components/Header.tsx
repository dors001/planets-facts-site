import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <Flex className="header">
        <Logo />
        <NavBar />
      </Flex>
    </>
  );
};

export default Header;
