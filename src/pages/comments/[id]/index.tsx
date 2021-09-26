import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment";
import styled from "styled-components";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

export const getStaticPaths: GetStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
  const commentsData = await comments.json();
  const paths = commentsData.map((comment: any) => ({
    params: {
      id: comment.id.toString(),
    },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as any;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  if (!comment.ok) {
    return {
      notFound: true,
    };
  }

  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

const CommentsId: NextPage = (props: any) => {
  const { fallback } = props;

  return (
    <Container>
      <Header />
      <H3>
        SSGによるデータ取得：
        <br />
        ビルド時に10件静的生成→11件目以降はマウスホバー時にSG化
      </H3>
      <SWRConfig value={{ fallback }}>
        <Comment />
      </SWRConfig>
    </Container>
  );
};

export default CommentsId;

const Container = styled.div`
  min-height: 100vh;
  width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

const H3 = styled.h3`
  padding: 1rem 0;
`;
