import { VFC } from "react";
import { Headline } from "src/components/separate/Headline";
import { Links } from "src/components/separate/Links";
import styled from "styled-components";

export const Main: VFC<{ page: string }> = ({ page }) => {
  return (
    <Container>
      <Headline page={page} />
      <Links />
    </Container>
  );
};

const Container = styled.main`
  padding: 1rem 0 4rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
