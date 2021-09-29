import { VFC } from "react";
import { useComments } from "src/hooks/fetch/useFetchArray";
import Link from "next/link";
import { List } from "src/styles/List";

export const Comments: VFC = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>コメントがありません</div>;

  return (
    <ol style={{ padding: "0 1rem" }}>
      {data?.map((comment: any) => (
        <List key={comment.id}>
          {/* fallback:blockingで画面に入ったタイミングでfetchされると余分なリクエストが増える
          Linkのprefetchをfalseにすることでマウスホバー時にSG化されるように制御できる */}
          <Link href={`/comments/${comment.id}`} prefetch={false}>
            <a>{comment.body}</a>
          </Link>
        </List>
      ))}
    </ol>
  );
};
