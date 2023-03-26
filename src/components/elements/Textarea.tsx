import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type TextareaProps = ChakraTextareaProps & {
  register?: UseFormRegisterReturn;
};

export const Textarea = ({ register, ...props }: TextareaProps) => (
  <ChakraTextarea {...props} {...register} />
);
