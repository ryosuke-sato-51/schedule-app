import React from "react";
import Head from "next/head";
import { Button } from "@chakra-ui/react";
import { css } from "@emotion/react";

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
      <p css={styles}>ユーザーページです。</p>
    </>
  );
}
