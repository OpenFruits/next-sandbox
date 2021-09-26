import type { NextPage } from "next";
import { Header } from "src/components/Header";
import { Post } from "src/components/Post";
import styled from "styled-components";

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

const Container = styled.div`
  min-height: 100vh;
  width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

const H3 = styled.h3`
  padding: 1rem 0;
`;
