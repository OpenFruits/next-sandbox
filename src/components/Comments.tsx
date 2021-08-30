import { VFC } from "react";
import { useComments } from "src/hooks/useComments";
import Link from "next/link";

export const Comments: VFC = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>No Comments found.</div>;

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
