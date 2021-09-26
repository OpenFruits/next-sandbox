import { VFC } from "react";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import styled from "styled-components";

type Props = {
  page: string;
};

const Container = styled.main`
  padding: 1rem 0 4rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main: VFC<Props> = (props) => {
  return (
    <Container>
      <Headline page={props.page} />
      <Links />
    </Container>
  );
};
