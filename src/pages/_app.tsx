import "ress";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Providers } from "@/provider";
import { Layout } from "@/components/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
