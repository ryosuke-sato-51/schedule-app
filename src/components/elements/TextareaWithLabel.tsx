import { Box, BoxProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

import { Textarea, Label } from "./index";

type TextareaWithLabelProps = BoxProps & {
  id: string;
  name: string;
  label: string;
  register?: UseFormRegisterReturn;
};

export const TextareaWithLabel = ({
  id,
  name,
  label,
  register,
  ...boxProps
}: TextareaWithLabelProps) => {
  return (
    <Box {...boxProps}>
      <Label htmlFor={id} label={label} />
      <Box mt={"8px"}>
        <Textarea id={id} name={name} register={register} />
      </Box>
    </Box>
  );
};
