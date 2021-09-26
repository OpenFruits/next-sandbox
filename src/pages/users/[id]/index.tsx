import type { GetServerSideProps, NextPage } from "next";
import { Header } from "src/components/Header";
import { User } from "src/components/User";
import { API_URL } from "src/utils/const";
import styled from "styled-components";
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

const Container = styled.div`
  min-height: 100vh;
  width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

const H3 = styled.h3`
  padding: 1rem 0;
`;
