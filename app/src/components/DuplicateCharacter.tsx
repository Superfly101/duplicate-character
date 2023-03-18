import { Flex, Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CharacterContext } from "../context/character-context";
import CharacterItem from "./CharacterItem";
import SuccessAlert from "./SuccessAlert";

const DuplicateCharacter = () => {
  const {
    characters,
    originalCharacters,
    saveCharacters,
    removeDuplicateCharacters,
    hasDuplicateCharacters,
  } = useContext(CharacterContext);

  const CHARACTER_LIST = characters.split("");

  const navigate = useNavigate();

  const handleGoBack = () => {
    saveCharacters("");
    navigate("/");
  };

  return (
    <section>
      <Box p="4" px="8">
        <Button colorScheme="blue" onClick={handleGoBack}>
          Go Back
        </Button>
      </Box>
      {!hasDuplicateCharacters && (
        <SuccessAlert output1={originalCharacters} output2={characters} />
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
