import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";
import { Container } from "src/styles/Container";
import { H3 } from "src/styles/H3";

export const getStaticPaths: GetStaticPaths = async () => {
  // ビルド時にSGするデータを最初の10件に制御し、以降はユーザーのリクエスト時にSG化する
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
  const commentsData = await comments.json();
  const paths = commentsData.map((comment: any) => ({
    params: {
      id: comment.id.toString(),
    },
  }));

  // fallback:false → SG化されていないページは404になる
  // fallback:true → SG化しながら遷移（Loading処理が必要）
  // fallback:blocking → SG化してから遷移（画面に入ったタイミングでSG化）
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as any;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  // 存在しないcommentページにリクエストされたら404ページを表示する
  if (!comment.ok) return { notFound: true };

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

  // fallback:true の場合、以下の処理が必要
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }

  return (
    <Container>
      <Header />
      <H3>
        「SSG」+「fallback:blocking」+「Linkのprefetch:false」：
        <br />
        ビルド時に10件SG→11件目以降はマウスホバー時にSG化
      </H3>
      <SWRConfig value={{ fallback }}>
        <Comment />
      </SWRConfig>
    </Container>
  );
};

export default CommentsId;
