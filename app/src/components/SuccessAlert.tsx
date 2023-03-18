import { Alert, AlertIcon } from "@chakra-ui/react";

type AlertProp = {
  output1: string;
  output2: string;
};

const SuccessAlert = ({ output1, output2 }: AlertProp) => {
  return (
    <Alert status="success">
      <AlertIcon />
      All duplicates removed. Original string: {output1} New string: {output2}
    </Alert>
  );
};

export default SuccessAlert;
