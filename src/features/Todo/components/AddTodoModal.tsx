import { Box } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Modal,
  ModalProps,
  InputWithLabel,
  TextareaWithLabel,
  Button,
} from "@/components/elements";

type AddTodoModalProps = Pick<ModalProps, "triggerButton">;
type FormValues = {
  title: string;
  description: string;
};

export const AddTodoModal = ({ triggerButton }: AddTodoModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <Modal triggerButton={triggerButton} header={"TODOを追加する"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithLabel
          id="title"
          name="title"
          label="タイトル"
          register={register("title", { required: "入力が必須の項目です。" })}
          error={errors.title?.message}
        />
        <TextareaWithLabel
          id="description"
          name="description"
          label="説明"
          mt={"16px"}
          register={register("description")}
        />
        <Box mt={"24px"} textAlign={"right"}>
          <Button type="submit">追加する</Button>
        </Box>
      </form>
    </Modal>
  );
};
