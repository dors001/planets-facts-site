import { Box, Text, Button } from "@chakra-ui/react";

interface Props {
  topic: string;
  number: string;
}

const InfoButton = ({ topic, number }: Props) => {
  return (
    <>
      <Box className="info-buttons--btn" textAlign="left">
        <Text className="info-button--text" textStyle="h3">
          {number}
        </Text>
        <Button textStyle="h3" variant="ghost">
          {topic.toUpperCase()}
        </Button>
      </Box>
    </>
  );
};

export default InfoButton;
