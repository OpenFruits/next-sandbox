import { VFC } from "react";
import Link from "next/link";
import { usePost } from "src/hooks/usePost";

type Props = {
  postId: number;
};

export const PostByPostId: VFC<Props> = (props) => {
  const { data, error, isLoading } = usePost(props.postId);

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Link href={`/posts/${data.id}`}>
        <a>{data.title}</a>
      </Link>
    </div>
  );
};
