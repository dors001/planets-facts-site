import { Text, Flex, Show } from "@chakra-ui/react";

interface Props {
  factTitle: string;
  factNumbers: string;
}

const Fact = ({ factTitle, factNumbers }: Props) => {
  return (
    <>
      <Flex className="fact--container">
        <Text className="fact--content" textStyle="h3">
          {factTitle}
        </Text>
        <Text className="fact--content" textStyle="h2">
          {factNumbers}
        </Text>
      </Flex>
    </>
  );
};

export default Fact;
