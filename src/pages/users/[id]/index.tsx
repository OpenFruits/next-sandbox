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
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(API_URL);
  const userData = await user.json();

  return {
    props: {
      fallback: {
        [API_URL]: userData,
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
