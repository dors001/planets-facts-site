import { Divider, Flex, Show } from "@chakra-ui/react";
import InfoButton from "./InfoButton";

enum Topics {
  overview = "overview",
  structureMobile = "structure",
  surfaceMobile = "surface",
  structureDesktop = "internal structure",
  surfaceDesktop = "surface geology",
}

enum InfoBtnClass {
  desktop = "info-buttons--btn_desktop",
  tablet = "info-buttons--btn_tablet",
  mobile = "info-buttons--btn_mobile",
}

const InfoButtons = () => {
  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <Divider />
        <Flex className="info-buttons">
          <InfoButton
            infoBtnClass={InfoBtnClass.mobile}
            topic={Topics.overview}
            number=""
          />
          <InfoButton
            infoBtnClass={InfoBtnClass.mobile}
            topic={Topics.structureMobile}
            number=""
          />
          <InfoButton
            infoBtnClass={InfoBtnClass.mobile}
            topic={Topics.surfaceMobile}
            number=""
          />
        </Flex>
        <Divider />
      </Show>
      <Show breakpoint="(min-width: 768px) and (max-width: 1023px)">
        <Flex className="info-buttons" flexDirection="column">
          <InfoButton
            infoBtnClass={InfoBtnClass.tablet}
            topic={Topics.overview}
            number="01"
          />
          <InfoButton
            infoBtnClass={InfoBtnClass.tablet}
            topic={Topics.structureDesktop}
            number="02"
          />
          <InfoButton
            infoBtnClass={InfoBtnClass.tablet}
            topic={Topics.surfaceDesktop}
            number="03"
          />
        </Flex>
      </Show>
      <Show above="lg">
        <Flex className="info-buttons" flexDirection="column">
          <InfoButton
            infoBtnClass={InfoBtnClass.desktop}
            topic={Topics.overview}
            number="01"
          />
          <InfoButton
            infoBtnClass={InfoBtnClass.desktop}
            topic={Topics.structureDesktop}
            number="02"
          />
          <InfoButton
            infoBtnClass={InfoBtnClass.desktop}
            topic={Topics.surfaceDesktop}
            number="03"
          />
        </Flex>
      </Show>
    </>
  );
};

export default InfoButtons;
