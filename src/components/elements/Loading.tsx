import { Spinner, SpinnerProps } from "@chakra-ui/react";

type LoadingProps = SpinnerProps;

export const Loading = ({ ...props }: LoadingProps) => {
  return <Spinner color="teal" size={"xl"} {...props} />;
};
