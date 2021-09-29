import { VFC } from "react";
import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/fetch/useFetchArray";
import { List } from "src/styles/List";

export const CommentsByPostId: VFC<{ postId: number }> = ({ postId }) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(postId);

  if (isLoading) return <div>コメント：ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>コメントが見つかりません</div>;

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
