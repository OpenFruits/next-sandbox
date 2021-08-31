import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "src/components/Comments";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

const Comments: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <CommentsComponent />
    </Container>
  );
};

export default Comments;
