import { forwardRef } from "react";
import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <ChakraInput {...props} ref={ref} />
));

Input.displayName = "Input";
