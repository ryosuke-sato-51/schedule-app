import { ReactNode } from "react";
import { ChakraProvider } from "./ChakraProvider";
import { TanQueryProvider } from "./TanQueryProvider";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <TanQueryProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </TanQueryProvider>
  );
};
