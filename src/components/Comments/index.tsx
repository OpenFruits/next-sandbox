import { VFC } from "react";
import { useComments } from "src/hooks/fetch/useFetchArray";
import Link from "next/link";
import styled from "styled-components";

export const Comments: VFC = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>コメントがありません</div>;

  return (
    <ol style={{ padding: "0 1rem" }}>
      {data?.map((comment: any) => (
        <List key={comment.id}>
          <Link href={`/comments/${comment.id}`}>
            <a>{comment.body}</a>
          </Link>
        </List>
      ))}
    </ol>
  );
};

const List = styled.li`
  margin: 0.4rem 0;
  &:hover {
    color: gray;
  }
`;
