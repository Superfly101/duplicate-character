import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton } from "@chakra-ui/react";

type CardProps = {
  children: React.ReactNode;
  onRemove: () => void;
};

const CharacterItem = ({ children, onRemove }: CardProps) => {
  return (
    <Flex
      direction="column-reverse"
      align="center"
      bg="yellow"
      p="4"
      gap="2"
      borderRadius="lg"
    >
      <Heading>{children}</Heading>
      <IconButton
        onClick={onRemove}
        colorScheme="teal"
        variant="solid"
        aria-label="Delete duplicate character"
        icon={<DeleteIcon />}
      />
    </Flex>
  );
};

export default CharacterItem;
