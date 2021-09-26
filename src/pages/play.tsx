import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import styled from "styled-components";
import { PageProps } from "src/types/page";
import { Headline } from "src/components/Headline";
import React, { VFC } from "react";
import { API_URL } from "src/utils/const";
import useSWR, { SWRConfig } from "swr";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const getStaticProps: GetStaticProps = async () => {
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

const Play: NextPage<PageProps> = (props) => {
  return (
    <Container>
      <Head>
        <title>Play Page</title>
      </Head>

      <Header />

      <Headline page="play" />

      <ChildComponent isSG={false} />
      <SWRConfig value={{ fallback: props.fallback }}>
        <ChildComponent isSG />
      </SWRConfig>

      {props.isShow && <h1>{props.count}</h1>}
      {props.isShow && <h1>{props.doubleCount}</h1>}
      {props.isShow && <button onClick={props.handleClick}>Count Up</button>}
      <button onClick={props.handleDisplay}>
        {props.isShow ? "Hide Counter" : "Show Counter"}
      </button>
    </Container>
  );
};

export default Play;
