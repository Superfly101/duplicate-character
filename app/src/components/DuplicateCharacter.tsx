import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { CharacterContext } from "../context/character-context";
import CharacterItem from "./CharacterItem";

const DuplicateCharacter = () => {
  const { characters, removeDuplicateCharacters } =
    useContext(CharacterContext);

  const CHARACTER_LIST = characters.split("");

  return (
    <section>
      <Flex p="8" gap="8" wrap="wrap" maxW="70rem" mx="auto">
        {CHARACTER_LIST.map((char, index) => (
          <CharacterItem
            key={index}
            onRemove={removeDuplicateCharacters.bind(null, char, index)}
          >
            {char}
          </CharacterItem>
        ))}
      </Flex>
    </section>
  );
};

export default DuplicateCharacter;
