import { Box, BoxProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

import { Input, Label, ErrorText } from "./index";

type InputWithLabelProps = BoxProps & {
  id: string;
  name: string;
  type?: string;
  label: string;
  register?: UseFormRegisterReturn;
  error?: string;
};

export const InputWithLabel = ({
  id,
  name,
  type = "text",
  label,
  register,
  error,
  ...boxProps
}: InputWithLabelProps) => {
  return (
    <Box {...boxProps}>
      <Label htmlFor={id} label={label} />
      <Box mt={"8px"}>
        <Input id={id} name={name} type={type} register={register} />
      </Box>
      {error && <ErrorText text={error} mt={"8px"} />}
    </Box>
  );
};
