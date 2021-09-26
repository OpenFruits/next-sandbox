import { VFC } from "react";
import { usePosts } from "src/hooks/fetch/useFetchArray";
import Link from "next/link";

export const Posts: VFC = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>データが空です</div>;

  return (
    <div>
      <ol>
        {data?.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
