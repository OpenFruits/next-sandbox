import { VFC } from "react";
import { useComment } from "src/hooks/useComment";
import styled from "styled-components";

const Article = styled.div`
  minheight: 100vh;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Comment: VFC = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) return <div>...Loading</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <Article>
      <h1>{data.body}</h1>
      <ul>
        <li>{data.name}</li>
        <li>{data.email}</li>
      </ul>
    </Article>
  );
};
