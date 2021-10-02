import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "src/components/Comments";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";
import { Container } from "src/styles/Container";
import { H3 } from "src/styles/H3";
import { Comment, Props } from "src/utils/types";

export const getStaticProps: GetStaticProps<Props<Comment[]>> = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData: Comment[] = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
    revalidate: 10,
  };
};

const Comments: NextPage<Props<Comment[]>> = (props) => {
  const { fallback } = props;

  return (
    <Container>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <H3>
        ・「SSG + fallback:blocking + Linkのprefetch:false」
        <br />
        ・ビルド時に10件SG → 以降はマウスホバー時にSG化
        <br />
        ・ISRにより10秒後ごとにキャッシュ更新を許可
        <br />
        ・SWRImmutableによりfetchは行われない
      </H3>
      <SWRConfig value={{ fallback }}>
        <CommentsComponent />
      </SWRConfig>
    </Container>
  );
};

export default Comments;
