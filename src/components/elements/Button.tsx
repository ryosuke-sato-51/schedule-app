import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
export const Button = ({ children, ...props }: ButtonProps) => (
  <ChakraButton {...props} colorScheme={"teal"} disabled={true}>
    {children}
  </ChakraButton>
);
