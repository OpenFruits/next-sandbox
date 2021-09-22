import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";
import styled from "styled-components";
import { SWRConfig } from "swr";

const Container = styled.div`
  min-height: 100vh;
  width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const POSTS_API_URL = `https://jsonplaceholder.typicode.com/posts`;
  const posts = await fetch(POSTS_API_URL);
  const postsData = await posts.json();

  return {
    props: {
      fallback: {
        [POSTS_API_URL]: postsData,
      },
    },
  };
};

const Posts: NextPage<any> = (props) => {
  const { fallback } = props;

  return (
    <Container>
      <Head>
        <title>Posts Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <PostsComponent />
      </SWRConfig>
    </Container>
  );
};

export default Posts;
