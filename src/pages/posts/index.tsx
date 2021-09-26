import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";
import { Container } from "src/styles/Container";
import { H3 } from "src/styles/H3";

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
