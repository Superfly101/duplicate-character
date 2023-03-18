import { Flex } from "@chakra-ui/react";
import CharacterItem from "./CharacterItem";

const DuplicateCharacter = () => {
  const CHARACTER_LIST = "aabcaccda".split("");

  return (
    <section>
      <h2>This is the duplicate character page</h2>
      <Flex p="8" gap="8" wrap="wrap" maxW="70rem" mx="auto">
        {CHARACTER_LIST.map((char, index) => (
          <CharacterItem key={index}>{char}</CharacterItem>
        ))}
      </Flex>
    </section>
  );
};

export default DuplicateCharacter;
