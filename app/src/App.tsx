import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import NewCharacter from "./components/NewCharacter";

function App() {
  return (
    <main>
      <Flex p="4">
        <Heading textAlign="center" w="100%">
          Duplicate Character Remover
        </Heading>
      </Flex>

      <NewCharacter />
    </main>
  );
}

export default App;
