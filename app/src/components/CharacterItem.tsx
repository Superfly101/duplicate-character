import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton } from "@chakra-ui/react";

type CardProps = {
  children: React.ReactNode;
  onRemove: () => void;
};

const CharacterItem = ({ children, onRemove }: CardProps) => {
  const getCardColor = (char: string) => {
    // set character in upper case
    const alphabet = char.toLowerCase();

    // get the ASCII code of the character
    const asciiCode = alphabet.charCodeAt(0);

    // number that contains 3 times ASCII value of character -- unique for every alphabet
    const colorNum =
      asciiCode.toString() + asciiCode.toString() + asciiCode.toString();

    let num = Math.round(0xffffff * parseInt(colorNum));
    let r = (num >> 16) & 255;
    let g = (num >> 8) & 255;
    let b = num & 255;

    return "rgb(" + r + ", " + g + ", " + b + ")";
  };
  return (
    <Flex
      direction="column-reverse"
      align="center"
      bg={getCardColor(children!.toString())}
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
