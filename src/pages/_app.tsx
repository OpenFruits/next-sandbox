import type { AppProps } from "next/app";
import Head from "next/head";
import { useCounter } from "src/hooks/play/useCounter";
import { useBgColor } from "src/hooks/play/useBgColor";
import { SWRConfig } from "swr";
import { fetcher } from "src/utils/fetcher";
import "src/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const counter = useCounter();
  useBgColor();

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* fetch関数の共通化 */}
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} {...counter} />;
      </SWRConfig>
    </>
  );
};

export default MyApp;
