import { Box } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="100%" borderRadius={16} overflow="hidden" boxShadow="base">
      {children}
    </Box>
  );
};

export default GameCardContainer;
