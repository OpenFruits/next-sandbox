import { VFC } from "react";
import { useComment } from "src/hooks/fetch/useComment";
import styled from "styled-components";
import { PostByPostId } from "src/components/Post/PostByPostId";

export const Comment: VFC = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) return <div>...Loading</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <p>{`${data.name}（${data.email}）`}</p>
      <CommentBody>{data.body}</CommentBody>
      <H3>元記事</H3>
      <PostByPostId postId={data.postId} />
    </>
  );
};

const CommentBody = styled.h1`
  margin: 0.5rem 0;
  font-size: 1.5rem;
`;

const H3 = styled.h3`
  padding: 1rem 0;
`;
