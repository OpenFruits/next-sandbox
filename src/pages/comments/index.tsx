import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "src/components/Comments";
import styled from "styled-components";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

export const getStaticProps: GetStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
  };
};

const Comments: NextPage<any> = (props) => {
  const { fallback } = props;

  return (
    <Container>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <H3>SSGによるデータ取得：ビルド時に静的生成（更新不可）</H3>
      <SWRConfig value={{ fallback }}>
        <CommentsComponent />
      </SWRConfig>
    </Container>
  );
};

export default Comments;

const Container = styled.div`
  min-height: 100vh;
  width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

const H3 = styled.h3`
  padding: 1rem 0;
`;
