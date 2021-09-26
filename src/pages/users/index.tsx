import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";
import { API_URL } from "src/utils/const";
import styled from "styled-components";
import { SWRConfig } from "swr";

export const getServerSideProps: GetServerSideProps = async () => {
  const USERS_API_URL = `${API_URL}/users`;
  const users = await fetch(USERS_API_URL);
  const usersData = await users.json();

  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
      },
    },
  };
};

const Users: NextPage = (props: any) => {
  const { fallback } = props;

  return (
    <Container>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <H3>SSRによるデータ取得：取得完了まで待機→遷移</H3>
      <SWRConfig value={{ fallback }}>
        <UsersComponent />
      </SWRConfig>
    </Container>
  );
};

export default Users;

const Container = styled.div`
  min-height: 100vh;
  width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

const H3 = styled.h3`
  padding: 1rem 0;
`;
