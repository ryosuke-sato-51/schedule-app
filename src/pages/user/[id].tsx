import React from "react";
import Head from "next/head";
import { Button } from "@chakra-ui/react";
import { css } from "@emotion/react";

import { TodoList } from "@/features/Todo";

const styles = css`
  color: red;
`;

export default function User() {
  return (
    <>
      <Head>
        <title>ユーザーページ</title>
        <meta name="description" content="" />
      </Head>
      <TodoList />
    </>
  );
}
