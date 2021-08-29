import { VFC } from "react";
import styled from "styled-components";

type Props = {
  page: string;
};

export const Headine: VFC<Props> = (props) => {
  const Title = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-transform: capitalize;
    text-align: center;
  `;

  const Description = styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: center;
  `;

  const Code = styled.code`
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  `;

  return (
    <div>
      <Title>{`${props.page} Page`}</Title>

      <Description>
        Get started by editing <Code>{`pages/${props.page}.js`}</Code>
      </Description>
    </div>
  );
};
