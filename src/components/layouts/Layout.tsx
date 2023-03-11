import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box maxW={"1000px"} mx={"auto"}>
      <Header />
      <Box as="main">
        <Box p={"20px"}>{children}</Box>
      </Box>
      <Footer />
    </Box>
  );
};
