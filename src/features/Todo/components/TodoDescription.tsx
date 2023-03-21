import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

import { Button, Textarea } from "@/components/elements";

type TodoDescriptionProps = {
  description: string;
};

export const TodoDescription = ({
  description: descriptionProp,
}: TodoDescriptionProps) => {
  const [description, setDescription] = useState(descriptionProp);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const startEditingDescription = () => {
    setIsEditingDescription(true);
  };

  const endEditingDescription = () => {
    setIsEditingDescription(false);
  };

  return (
    <>
      {isEditingDescription ? (
        <Flex alignItems={"flex-end"}>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            colorScheme={"teal"}
            ml={"10px"}
            onClick={endEditingDescription}
          >
            保存
          </Button>
        </Flex>
      ) : (
        <Text onClick={startEditingDescription} cursor={"pointer"}>
          {description}
        </Text>
      )}
    </>
  );
};
