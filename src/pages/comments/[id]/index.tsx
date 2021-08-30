import type { NextPage } from "next";
import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
`;

const CommentsId: NextPage = () => {
  return (
    <Container>
      <Header />
      <Comment />
    </Container>
  );
};

export default CommentsId;
