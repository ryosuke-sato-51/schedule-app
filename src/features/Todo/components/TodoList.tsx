import React from "react";
import { useState, useEffect } from "react";
import { List, Box } from "@chakra-ui/react";

import { TodoItem, TodoItemProps } from "./TodoItem";
import { Loading } from "@/components/elements";
import { useGetTodos } from "../hooks/todos";

type ListDataType = Array<TodoItemProps>;

export const TodoList = () => {
  const [list, setList] = useState<ListDataType | undefined>(undefined);
  const { data: todos, isLoading } = useGetTodos();

  useEffect(() => {
    if (isLoading) return;
    const SliceData = todos?.slice(0, 2);
    const DummyListData = SliceData?.map((todo) => {
      return {
        title: todo.title,
        description: todo.body,
      };
    });
    setList(DummyListData);
  }, [isLoading]);

  return (
    <>
      {list ? (
        <List>
          {list.map(({ title, description }, index) => (
            <TodoItem key={index} title={title} description={description} />
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
