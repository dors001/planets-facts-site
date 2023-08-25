import { Divider, Flex, Show } from "@chakra-ui/react";
import InfoButton from "./InfoButton";

export enum Topics {
  overview = "overview",
  structure = "structure",
  surface = "geology",
}

interface Props {
  setInfo: (context: Topics) => void;
  activeTopic: Topics;
  planetColor: string;
}

const InfoButtons = ({ setInfo, activeTopic, planetColor }: Props) => {
  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <Divider />
        <Flex className="info-buttons">
          <InfoButton
            topic={Topics.overview}
            number=""
            setInfo={() => setInfo(Topics.overview)}
            activeTopic={activeTopic}
            planetColor={planetColor}
          />
          <InfoButton
            topic={Topics.structure}
            number=""
            setInfo={() => setInfo(Topics.structure)}
            activeTopic={activeTopic}
            planetColor={planetColor}
          />
          <InfoButton
            topic={Topics.surface}
            number=""
            setInfo={() => setInfo(Topics.surface)}
            activeTopic={activeTopic}
            planetColor={planetColor}
          />
        </Flex>
        <Divider />
      </Show>
      <Show above="md">
        <Flex className="info-buttons">
          <InfoButton
            topic={Topics.overview}
            number="01"
            setInfo={() => setInfo(Topics.overview)}
            activeTopic={activeTopic}
            planetColor={planetColor}
          />
          <InfoButton
            topic={Topics.structure}
            number="02"
            setInfo={() => setInfo(Topics.structure)}
            activeTopic={activeTopic}
            planetColor={planetColor}
          />
          <InfoButton
            topic={Topics.surface}
            number="03"
            setInfo={() => setInfo(Topics.surface)}
            activeTopic={activeTopic}
            planetColor={planetColor}
          />
        </Flex>
      </Show>
    </>
  );
};

export default InfoButtons;
