import { VFC } from "react";
import Link from "next/link";
import { usePost } from "src/hooks/fetch/usePost";
import styled from "styled-components";

export const PostByPostId: VFC<{ postId: number }> = ({ postId }) => {
  const { data, error, isLoading } = usePost(postId);

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <Link href={`/posts/${data.id}`} passHref>
      <Anchor>{data.title}</Anchor>
    </Link>
  );
};

const Anchor = styled.a`
  &:hover {
    color: gray;
  }
`;
