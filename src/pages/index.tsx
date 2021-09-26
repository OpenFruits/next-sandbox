import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import styled from "styled-components";
import { PageProps } from "src/@types/page";
import { Main } from "src/components/separate/Main";

const Home: NextPage<PageProps> = () => {
  return (
    <Container>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <Main page="index" />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
