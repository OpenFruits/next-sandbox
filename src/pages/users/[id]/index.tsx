import type { NextPage } from "next";
import { Header } from "src/components/Header";
import { User } from "src/components/User";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
`;

const UsersId: NextPage = () => {
  return (
    <Container>
      <Header />
      <User />
    </Container>
  );
};

export default UsersId;
