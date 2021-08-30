import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
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

const About: NextPage<PageProps> = (props) => {
  return (
    <Container>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      {props.isShow && <h1>{props.doubleCount}</h1>}
      {props.isShow && (
        <button onClick={props.handleClick}>カウントアップ</button>
      )}
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="about" />

      <Footer />
    </Container>
  );
};

export default About;
