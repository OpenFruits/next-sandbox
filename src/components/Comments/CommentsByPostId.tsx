import { VFC } from "react";
import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/fetch/useFetchArray";

type Props = {
  postId: number;
};

export const CommentsByPostId: VFC<Props> = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.postId);

  if (isLoading) return <div>コメント：ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>コメントが見つかりません</div>;

  return (
    <div>
      <ol>
        {data?.map((comment: any) => (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{comment.body}</a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
