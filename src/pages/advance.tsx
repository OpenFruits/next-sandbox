import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts } from "src/components/Posts";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </Container>
  );
};

export default Home;
