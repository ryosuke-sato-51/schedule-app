import { Text, TextProps } from "@chakra-ui/react";

type ErrorTextProps = TextProps & {
  text: string;
};

export const ErrorText = ({ text, ...props }: ErrorTextProps) => {
  return (
    <Text fontSize={"14px"} color={"red.600"} {...props}>
      {text}
    </Text>
  );
};
