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
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState<string[]>([]);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    if (array.some((item) => item === text)) {
      alert("同じ要素が既に存在しています");
      return;
    }
    setArray((prevArray) => [...prevArray, text]);
    setText("");
  }, [array, text]);

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
      <button onClick={handleClick}>カウントアップ</button>
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
