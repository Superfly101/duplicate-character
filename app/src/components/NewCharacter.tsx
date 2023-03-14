import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import ErrorAlert from "./ErrorAlert";

const NewCharacter = () => {
  const [characterInputValue, setCharacterInputValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!characterInputValue) {
      setShowError(true);
      return;
    }
    setShowError(false);
    console.log(characterInputValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCharacterInputValue(event.target.value.trim());
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
          <FormControl isInvalid={showError}>
            <FormLabel>Characters</FormLabel>
            <Input placeholder="Enter Character" onChange={handleInputChange} />
          </FormControl>
          <Button mt="4" colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Flex>
    </section>
  );
};

export default NewCharacter;
