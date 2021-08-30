import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log(`マウント時: ${count}`);

    return () => {
      // cleanup function：初回マウント以降、先に呼ばれる
      document.body.style.backgroundColor = "";
      console.log(`アンマウント時: ${count}`);
    };
  }, [count]);

  return (
    <Container>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />

      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />

      <Footer />
    </Container>
  );
};

export default Home;
