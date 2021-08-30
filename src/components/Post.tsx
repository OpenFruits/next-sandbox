import { VFC } from "react";
import Head from "next/head";
import { usePost } from "src/hooks/usePost";
import styled from "styled-components";

const Article = styled.div`
  minheight: 100vh;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Post: VFC = () => {
  const { user, post, error, isLoading } = usePost();

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <Article>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name ? <div>Created by {user.name}</div> : null}
      </Article>
    </div>
  );
};
