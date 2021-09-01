import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import styled from "styled-components";
import { PageProps } from "src/types/page";
import useSWR, { SWRConfig } from "swr";
import { VFC } from "react";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const API = "https://jsonplaceholder.typicode.com/posts";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(API);
  const data = await res.json();
  return {
    props: {
      fallback: {
        [API]: data,
      },
    },
  };
};

const ChildComponent: VFC = () => {
  const { data, error } = useSWR(API);
  console.log({ data, error });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <h1>{data.length}</h1>;
};

const Home: NextPage<PageProps & any> = (props) => {
  return (
    <Container>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />

      <SWRConfig value={{ fallback: props.fallback }}>
        <ChildComponent />
      </SWRConfig>

      {props.isShow && <h1>{props.count}</h1>}
      {props.isShow && (
        <button onClick={props.handleClick}>カウントアップ</button>
      )}
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item: any) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />

      <Footer />
    </Container>
  );
};

export default Home;
