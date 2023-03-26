import { Box, BoxProps } from "@chakra-ui/react";
import { css } from "@emotion/react";

const labelStyle = css`
  font-size: 14px;
`;

type LabelProps = BoxProps & {
  htmlFor: string;
  label: string;
};

export const Label = ({ htmlFor, label, ...props }: LabelProps) => {
  return (
    <Box {...props}>
      <label css={labelStyle} htmlFor={htmlFor}>
        {label}
      </label>
    </Box>
  );
};
