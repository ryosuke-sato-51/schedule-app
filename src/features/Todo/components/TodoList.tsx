import React from "react";
import { useState, useEffect } from "react";
import { List, Box } from "@chakra-ui/react";

import { TodoItem, TodoItemProps } from "./TodoItem";
import { Loading } from "@/components/elements";

const ListData = [
  {
    title: "やること1",
  },
  {
    title: "やること2",
  },
];

type ListDataType = Array<TodoItemProps>;

export const TodoList = () => {
  const [list, setList] = useState<ListDataType | null>(null);

  useEffect(() => {
    setList(ListData);
  }, []);

  return (
    <>
      {list ? (
        <List>
          {list.map(({ title }, index) => (
            <TodoItem key={index} title={title} />
          ))}
        </List>
      ) : (
        <Box textAlign={"center"}>
          <Loading />
        </Box>
      )}
    </>
  );
};
