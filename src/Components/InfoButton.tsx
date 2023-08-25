import { Box, Text, Button, Flex, Show } from "@chakra-ui/react";
import { Topics } from "./InfoButtons";

interface Props {
  topic: string;
  number: string;
  setInfo: (context: string) => void;
  activeTopic: Topics;
  planetColor: string;
}

const InfoButton = ({
  topic,
  number,
  setInfo,
  activeTopic,
  planetColor,
}: Props) => {
  const isActive = activeTopic === topic;
  return (
    <>
      <Show below="sm">
        <Button
          style={
            isActive
              ? {
                  borderBottom: "2px solid",
                  borderRadius: "0",
                  borderColor: planetColor,
                }
              : {}
          }
          className="info-buttons--btn"
          textStyle="h3"
          variant="ghost"
          onClick={() => setInfo(topic)}
        >
          <Flex w="100%">
            <Box>
              <Text className="info-button--number" textStyle="h3">
                {number}
              </Text>
            </Box>
            <Box className="info-button--text">{topic.toUpperCase()}</Box>
          </Flex>
        </Button>
      </Show>
      <Show above="sm">
        <Button
          style={isActive ? { backgroundColor: planetColor } : {}}
          className="info-buttons--btn"
          textStyle="h3"
          variant="ghost"
          w="350px"
          h="48px"
          onClick={() => setInfo(topic)}
        >
          <Flex w="100%">
            <Box>
              <Text className="info-button--number" textStyle="h3">
                {number}
              </Text>
            </Box>
            <Box className="info-button--text">{topic.toUpperCase()}</Box>
          </Flex>
        </Button>
      </Show>
    </>
  );
};

export default InfoButton;
