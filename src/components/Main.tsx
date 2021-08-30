import { VFC } from "react";
import { Headine } from "./Headline";
import { Links } from "./Links";
import styled from "styled-components";

type Props = {
  page: string;
};

const Container = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main: VFC<Props> = (props) => {
  return (
    <Container>
      <Headine page={props.page} />
      <Links />
    </Container>
  );
};
