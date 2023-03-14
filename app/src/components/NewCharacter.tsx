import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const NewCharacter = () => {
  return (
    <section>
      <Flex maxW="35rem" mx="auto" mt="4" py="8" px="4">
        <form style={{ width: "100%" }}>
          <FormControl>
            <FormLabel>Characters</FormLabel>
            <Input placeholder="Enter Character" />
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
