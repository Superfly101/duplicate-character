import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CharacterContext } from "../context/character-context";
import ErrorAlert from "./ErrorAlert";

const NewCharacter = () => {
  const [showError, setShowError] = useState(false);
  const characterInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { saveCharacters } = useContext(CharacterContext);

  // Reset context state when component is rerendered
  useEffect(() => {
    saveCharacters("");
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredCharacter = characterInputRef
      .current!.value.trim()
      .toLowerCase();
    if (enteredCharacter === "") {
      setShowError(true);
      characterInputRef.current!.focus();
      return;
    }
    setShowError(false);
    saveCharacters(enteredCharacter);
    navigate("/remove-duplicate");
  };

  return (
    <section>
      <Flex
        direction="column"
        gap="4"
        maxW="35rem"
        mx="auto"
        mt="4"
        py="8"
        px="4"
      >
        {showError && <ErrorAlert />}
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Characters</FormLabel>
            <Input
              placeholder="Enter Character"
              ref={characterInputRef}
              borderColor="#3182ce"
              _focus={
                showError
                  ? { borderColor: "#E53E3E", boxShadow: "0 0 0 1px #E53E3E" }
                  : {}
              }
            />
          </FormControl>
          <Button mt="4" colorScheme="blue" type="submit">
            Submit
          </Button>
        </form>
      </Flex>
    </section>
  );
};

export default NewCharacter;
