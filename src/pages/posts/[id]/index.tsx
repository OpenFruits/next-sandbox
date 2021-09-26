import type { NextPage } from "next";
import { Header } from "src/components/Header";
import { Post } from "src/components/Post";
import { Container } from "src/styles/Container";
import { H3 } from "src/styles/H3";

const PostsId: NextPage = () => {
  return (
    <Container>
      <Header />
      <H3>CSRによるデータ取得：遷移→ローディング→表示</H3>
      <Post />
    </Container>
  );
};

export default PostsId;
