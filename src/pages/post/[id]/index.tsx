import type { NextPage } from "next";
import { Header } from "src/components/Header";
import { Post } from "src/components/Post";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
`;

const PostId: NextPage = () => {
  return (
    <Container>
      <Header />
      <Post />
    </Container>
  );
};

export default PostId;
