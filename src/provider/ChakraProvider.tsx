import { ChakraProvider as ChakraProviderComponent } from "@chakra-ui/react";
import { ReactNode } from "react";

type ChakraProviderProps = {
  children: ReactNode;
};

export const ChakraProvider = ({ children }: ChakraProviderProps) => {
  return <ChakraProviderComponent>{children}</ChakraProviderComponent>;
};
