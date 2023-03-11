import {
  ChakraProvider as ChakraProviderComponent,
  ChakraProviderProps,
} from "@chakra-ui/react";

export const ChakraProvider = ({ children }: ChakraProviderProps) => {
  return <ChakraProviderComponent>{children}</ChakraProviderComponent>;
};
