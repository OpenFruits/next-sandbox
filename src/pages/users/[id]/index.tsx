import type { GetServerSideProps, NextPage } from "next";
import { Header } from "src/components/Header";
import { User } from "src/components/User";
import styled from "styled-components";
import { SWRConfig } from "swr";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  // ユーザー情報の取得
  const USER_API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();
  // ユーザーの投稿の取得
  const POST_API_URL = `https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`;
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
      <SWRConfig value={{ fallback }}>
        <User />
      </SWRConfig>
    </Container>
  );
};

export default UsersId;
