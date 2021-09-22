import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";
import styled from "styled-components";
import { SWRConfig } from "swr";

const Container = styled.div`
  min-height: 100vh;
  width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const USERS_API_URL = `https://jsonplaceholder.typicode.com/users`;
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
      <SWRConfig value={{ fallback }}>
        <Header />
        <UsersComponent />
      </SWRConfig>
    </Container>
  );
};

export default Users;
