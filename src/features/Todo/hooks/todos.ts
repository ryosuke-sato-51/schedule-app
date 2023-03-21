import axios, { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { TodosResponse } from "../types";

const getTodos = async () => {
  const { data }: AxiosResponse<TodosResponse> = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  return data;
};

export const useGetTodos = () => useQuery(["todos"], getTodos);
