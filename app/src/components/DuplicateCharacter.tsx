import { Flex, Alert, AlertIcon, Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CharacterContext } from "../context/character-context";
import CharacterItem from "./CharacterItem";

const DuplicateCharacter = () => {
  const {
    characters,
    originalCharacters,
    removeDuplicateCharacters,
    hasDuplicateCharacters,
  } = useContext(CharacterContext);

  const CHARACTER_LIST = characters.split("");

  return (
    <section>
      <Box p="4" px="8">
        <Button colorScheme="blue">Go Back</Button>
      </Box>
      {!hasDuplicateCharacters && (
        <Alert status="success">
          <AlertIcon />
          All duplicates removed. Original string: {originalCharacters} New
          string: {characters}
        </Alert>
      )}
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
