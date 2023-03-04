import Head from "next/head";
import { Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Fragment } from "react";

const styles = css`
  color: red;
`;

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p css={styles}>テキスト</p>
        <Button colorScheme="blue">Button</Button>
      </main>
    </Fragment>
  );
}
