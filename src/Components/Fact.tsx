import { Text, Flex } from "@chakra-ui/react";

interface Props {
  factTitle?: string;
  factNumbers?: string;
}

const Fact = ({ factTitle, factNumbers }: Props) => {
  return (
    <>
      <Flex className="fact--container">
        <Text className="fact--content" textStyle="h3">
          {factTitle?.toUpperCase()}
        </Text>
        <Text className="fact--content" textStyle="h2">
          {factNumbers}
        </Text>
      </Flex>
    </>
  );
};

export default Fact;
