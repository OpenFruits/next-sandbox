import { VFC } from "react";
import { Headine } from "./Headline";
import { Links } from "./Links";
import styled from "styled-components";

type Props = {
  page: string;
};

export const Main: VFC<Props> = (props) => {
  const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Main>
      <Headine page={props.page} />
      <Links />
    </Main>
  );
};
