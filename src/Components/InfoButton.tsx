import { Box, Button } from "@chakra-ui/react";

interface Props {
  topic: string;
}

const InfoButton = ({ topic }: Props) => {
  return (
    <>
      <Box>
        <Button
          textStyle="h3"
          className="info-buttons--button"
          variant="outline"
        >
          {topic.toUpperCase()}
        </Button>
      </Box>
    </>
  );
};

export default InfoButton;
