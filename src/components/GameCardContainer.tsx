import { Box } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width={{sm:"auto", md:"400px", lg:"280px", xl:"200px"}} borderRadius={16} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
