import { Text, Flex } from "@chakra-ui/react";

interface Props {
  factTitle: string;
  factNumbers: string;
}

const Fact = ({ factTitle, factNumbers }: Props) => {
  return (
    <>
      <Flex className="fact--container">
        <Text textStyle="body">{factTitle}</Text>
        <Text textStyle="h2">{factNumbers}</Text>
      </Flex>
    </>
  );
};

export default Fact;
