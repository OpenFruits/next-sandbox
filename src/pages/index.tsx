import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";
import styled from "styled-components";
import { PageProps } from "src/types/page";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage<PageProps> = (props) => {
  const {
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;
  useBgLightBlue();

  return (
    <Container>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />

      {isShow && <h1>{count}</h1>}
      {isShow && <button onClick={handleClick}>カウントアップ</button>}
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />

      <Footer />
    </Container>
  );
};

export default Home;
