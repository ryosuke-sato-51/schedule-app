import { ListItem } from "@chakra-ui/react";

export type TodoItemProps = {
  title: string;
};

export const TodoItem = ({ title }: TodoItemProps) => {
  return <ListItem>{title}</ListItem>;
};
