import { VFC } from "react";
import Head from "next/head";
import { UserByUserId } from "./UserByUserId";
import { CommentsByPostId } from "./CommentsByPostId";
import styled from "styled-components";
import { usePost } from "src/hooks/usePost";
import { useRouter } from "next/router";

const Article = styled.div`
  minheight: 100vh;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Post: VFC = () => {
  const router = useRouter();
  const { data: post, isLoading, error } = usePost(Number(router.query.id));

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
        <UserByUserId userId={post?.userId} />
        <CommentsByPostId postId={post?.id} />
      </Article>
    </div>
  );
};
