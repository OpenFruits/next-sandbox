import type { GetServerSideProps, NextPage } from "next";
import { Header } from "src/components/Header";
import { User } from "src/components/User";
import { Container } from "src/styles/Container";
import { H3 } from "src/styles/H3";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  // ユーザー情報の取得
  const USER_API_URL = `${API_URL}/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();
  // ユーザーの投稿の取得
  const POST_API_URL = `${API_URL}/posts?userId=${userData.id}`;
  const posts = await fetch(POST_API_URL);
  const postsData = await posts.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POST_API_URL]: postsData,
      },
    },
  };
};

const UsersId: NextPage = (props: any) => {
  const { fallback } = props;

  return (
    <Container>
      <Header />
      <H3>SSRによるデータ取得：取得完了まで待機→遷移</H3>
      <SWRConfig value={{ fallback }}>
        <User />
      </SWRConfig>
    </Container>
  );
};

export default UsersId;
