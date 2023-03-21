import React from "react";
import { useState } from "react";
import { ListItem, Text, Flex, Box } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { css } from "@emotion/react";

import { Button, Input } from "@/components/elements";
import { TodoDescription } from "./TodoDescription";

const buttonStyle = css`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  ._show {
    transform: rotate(180deg);
  }
`;

export type TodoItemProps = {
  title: string;
  description: string;
};

export const TodoItem = ({ title: titleProp, description }: TodoItemProps) => {
  const [title, setTitle] = useState(titleProp);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(false);

  const startEditingTitle = () => {
    setIsEditingTitle(true);
  };

  const endEditingTitle = () => {
    setIsEditingTitle(false);
  };

  const toggleDescription = () => {
    setIsShowDescription(!isShowDescription);
  };

  return (
    <ListItem p={"10px"} borderBottom={"1px solid #ccc"}>
      <Flex alignItems={"center"}>
        <button css={buttonStyle} type="button" onClick={toggleDescription}>
          <ChevronDownIcon
            className={isShowDescription ? "_show" : undefined}
          />
        </button>
        {isEditingTitle ? (
          <Flex flex={"1"}>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            <Button colorScheme={"teal"} ml={"10px"} onClick={endEditingTitle}>
              保存
            </Button>
          </Flex>
        ) : (
          <Flex flex={"1"}>
            <Text onClick={startEditingTitle} cursor={"pointer"}>
              {title}
            </Text>
          </Flex>
        )}
      </Flex>
      <Box display={isShowDescription ? "block" : "none"} pt={"10px"}>
        <TodoDescription description={description} />
      </Box>
    </ListItem>
  );
};
