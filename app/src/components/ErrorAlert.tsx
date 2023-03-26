import {
  Flex,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";

const ErrorAlert = () => {
  return (
    <Alert flexDirection={["column", "row"]} status="error">
      <Flex>
        <AlertIcon />
        <AlertTitle>Empty input field!</AlertTitle>
      </Flex>
      <AlertDescription>Please provide a non-empty value</AlertDescription>
    </Alert>
  );
};

export default ErrorAlert;
