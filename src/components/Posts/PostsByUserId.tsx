import { VFC } from "react";
import { usePostsByUserId } from "src/hooks/fetch/useFetchArray";
import Link from "next/link";
import { List } from "src/styles/List";

export const PostsByUserId: VFC<{ userId: number }> = ({ userId }) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(userId);

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>データが空です</div>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {data?.map((post: any) => (
        <List key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <a>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </a>
          </Link>
        </List>
      ))}
    </ul>
  );
};
