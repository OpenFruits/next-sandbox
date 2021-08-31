import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

const Users: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UsersComponent />
    </Container>
  );
};

export default Users;
