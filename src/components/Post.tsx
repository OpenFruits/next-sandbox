import { VFC } from "react";
import Head from "next/head";
import { usePost } from "src/hooks/usePost";

export const Post: VFC = () => {
  const { user, post, error, isLoading } = usePost();

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name ? <div>Created by {user.name}</div> : null}
      </div>
    </div>
  );
};
