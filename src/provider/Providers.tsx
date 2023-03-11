import { ReactNode } from "react";
import { ChakraProvider } from "./ChakraProvider";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
