import { VFC } from "react";
import styled from "styled-components";

type Props = {
  page: string;
};

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const Description = styled.p`
  text-transform: capitalize;
  font-size: 1.5rem;
  text-align: center;
`;

export const Headline: VFC<Props> = (props) => {
  return (
    <div>
      <Title>NEXT.JS SANDBOX</Title>

      <Description>
        {`${props.page} Page`}
        <br />
      </Description>
    </div>
  );
};
