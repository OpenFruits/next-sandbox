import { VFC } from "react";
import { usePostsByUserId } from "src/hooks/useFetchArray";
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
