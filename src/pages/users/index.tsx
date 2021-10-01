import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";
import { Container } from "src/styles/Container";
import { H3 } from "src/styles/H3";
import { API_URL } from "src/utils/const";
import { Props, User } from "src/utils/types";
import { SWRConfig } from "swr";

export const getServerSideProps: GetServerSideProps<Props<User[]>> =
  async () => {
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

const Users: NextPage<Props<User[]>> = (props) => {
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
