import { forwardRef } from "react";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = ChakraInputProps & {
  register?: UseFormRegisterReturn;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ register, ...props }, ref) => (
    <ChakraInput {...props} ref={ref} {...register} />
  )
);

Input.displayName = "Input";
