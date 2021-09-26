import { VFC } from "react";
import { usePostsByUserId } from "src/hooks/fetch/useFetchArray";
import Link from "next/link";

type Props = {
  userId: number;
};

export const PostsByUserId: VFC<Props> = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.userId);

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>データが空です</div>;

  return (
    <ol>
      {data?.map((post: any) => (
        <li key={post.id} style={{ padding: "0.5rem 0" }}>
          <Link href={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};
