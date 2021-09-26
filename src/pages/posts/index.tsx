import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";
import styled from "styled-components";

const Posts: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <H3>CSRによるデータ取得：遷移→ローディング→表示</H3>
      <PostsComponent />
    </Container>
  );
};

export default Posts;

const Container = styled.div`
  min-height: 100vh;
  width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

const H3 = styled.h3`
  padding: 1rem 0;
`;
