import { VFC } from "react";
import { usePosts } from "src/hooks/usePosts";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const Posts: VFC = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>データが空です</div>;

  return (
    <div>
      <ol>
        {data.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};
