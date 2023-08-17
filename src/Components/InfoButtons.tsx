import { Divider, Flex, Show } from "@chakra-ui/react";
import InfoButton from "./InfoButton";

enum Topics {
  overview = "overview",
  structureMobile = "structure",
  surfaceMobile = "surface",
  structureDesktop = "internal structure",
  surfaceDesktop = "surface geology",
}

const InfoButtons = () => {
  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <Divider />
        <Flex className="info-buttons">
          <InfoButton topic={Topics.overview} number="" />
          <InfoButton topic={Topics.structureMobile} number="" />
          <InfoButton topic={Topics.surfaceMobile} number="" />
        </Flex>
        <Divider />
      </Show>
      <Show above="md">
        <Flex className="info-buttons">
          <InfoButton topic={Topics.overview} number="01" />
          <InfoButton topic={Topics.structureDesktop} number="02" />
          <InfoButton topic={Topics.surfaceDesktop} number="03" />
        </Flex>
      </Show>
    </>
  );
};

export default InfoButtons;
