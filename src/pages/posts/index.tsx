import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts } from "src/components/Posts";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
`;

const PostsIndex: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <Posts />
    </Container>
  );
};

export default PostsIndex;
