import { VFC } from "react";
import styled from "styled-components";

export const Headline: VFC<{ page: string }> = ({ page }) => {
  return (
    <>
      <Title>Next.js SANDBOX</Title>
      <Description>{`${page} Page`}</Description>
    </>
  );
};

const Title = styled.h1`
  font-size: 4rem;
`;

const Description = styled.p`
  text-transform: capitalize;
  font-size: 1.5rem;
  margin: 1rem 0;
`;
