import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { CharacterContext } from "../context/character-context";
import CharacterItem from "./CharacterItem";

const DuplicateCharacter = () => {
  const { characters } = useContext(CharacterContext);

  const CHARACTER_LIST = characters.split("");

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
