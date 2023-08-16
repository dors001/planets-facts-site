import { Box, Text, Button } from "@chakra-ui/react";

interface Props {
  topic: string;
  infoBtnClass: string;
  number: string;
}

const InfoButton = ({ topic, infoBtnClass, number }: Props) => {
  return (
    <>
      <Box className={infoBtnClass} textAlign="left">
        <Text className="info-button--text" textStyle="h3">
          {number}
        </Text>
        <Button textStyle="h3" variant="ghost" >
          {topic.toUpperCase()}
        </Button>
      </Box>
    </>
  );
};

export default InfoButton;
