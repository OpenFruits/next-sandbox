import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import React, { VFC } from "react";
import { API_URL } from "src/utils/const";
import useSWR, { SWRConfig } from "swr";
import { Post, Props } from "src/utils/types";
import { useCounter } from "src/hooks/play/useCounter";
import { Container } from "src/styles/Container";

export const getStaticProps: GetStaticProps<Props<Post[]>> = async () => {
  const res = await fetch(`${API_URL}/posts`);
  const data = await res.json();
  return {
    props: {
      fallback: {
        [`${API_URL}/posts`]: data,
      },
    },
  };
};

const ChildComponent: VFC<{ isSG: boolean }> = ({ isSG }) => {
  const { data, error } = useSWR(`${API_URL}/posts`);

  if (isSG) return <h3>SGでPostsの数を取得→「{data.length}」</h3>;
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <h3>CSRでPostsの数を取得→「{data.length}」</h3>;
};

const Play: NextPage<Props<Post[]>> = (props) => {
  const counter = useCounter();
  const { fallback } = props;

  return (
    <Container>
      <Head>
        <title>Play Page</title>
      </Head>

      <Header />

      <ChildComponent isSG={false} />
      <SWRConfig value={{ fallback }}>
        <ChildComponent isSG />
      </SWRConfig>

      {counter.isShow && <h3>{`Count：${counter.count}`}</h3>}
      {counter.isShow && <h3>{`DoubleCount：${counter.doubleCount}`}</h3>}
      {counter.isShow && (
        <button onClick={counter.handleClick}>Count Up</button>
      )}
      <button onClick={counter.handleDisplay}>
        {counter.isShow ? "Hide Counter" : "Show Counter"}
      </button>
    </Container>
  );
};

export default Play;
