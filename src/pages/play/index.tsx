import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import styled from "styled-components";
import { Headline } from "src/components/separate/Headline";
import React, { VFC } from "react";
import { API_URL } from "src/utils/const";
import useSWR, { SWRConfig } from "swr";
import { Post, Props } from "src/utils/types";
import { useCounter } from "src/hooks/play/useCounter";

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

  if (isSG) return <h2>SGでPostsの数を取得→「{data.length}」</h2>;
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <h2>CSRでPostsの数を取得→「{data.length}」</h2>;
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

      <Headline page="play" />

      <ChildComponent isSG={false} />
      <SWRConfig value={{ fallback }}>
        <ChildComponent isSG />
      </SWRConfig>

      {counter.isShow && <h2>{`Count：${counter.count}`}</h2>}
      {counter.isShow && <h2>{`DoubleCount：${counter.doubleCount}`}</h2>}
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

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
