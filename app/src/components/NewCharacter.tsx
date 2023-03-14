import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const NewCharacter = () => {
  const [characterInputValue, setCharacterInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCharacterInputValue(event.target.value.trim());
  return (
    <section>
      <Flex maxW="35rem" mx="auto" mt="4" py="8" px="4">
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <FormControl>
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
