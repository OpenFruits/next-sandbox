import type { AppProps } from "next/app";
import Head from "next/head";
import { useCounter } from "src/hooks/play/useCounter";
import { useBgColor } from "src/hooks/play/useBgColor";
import { SWRConfig } from "swr";
import "src/styles/globals.css";

// eslint-disable-next-line no-undef
const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const counter = useCounter();
  useBgColor();

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} {...counter} />;
      </SWRConfig>
    </>
  );
};

export default MyApp;
