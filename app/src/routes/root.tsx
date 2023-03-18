import { Flex, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <Flex p="4">
          <Heading textAlign="center" w="100%">
            Duplicate Character Remover
          </Heading>
        </Flex>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
