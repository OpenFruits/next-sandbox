import { VFC } from "react";
import Head from "next/head";
import { UserByUserId } from "./UserByUserId";
import { CommentsByPostId } from "./CommentsByPostId";
import styled from "styled-components";
import { usePost } from "src/hooks/fetch/usePost";
import { useRouter } from "next/router";

export const Post: VFC = () => {
  const router = useRouter();
  const { data, isLoading, error } = usePost(Number(router.query.id));

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <Article>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
        <UserByUserId userId={data?.userId} />
        <p>Comments</p>
        <CommentsByPostId postId={data?.id} />
      </Article>
    </div>
  );
};

const Article = styled.div`
  minheight: 100vh;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
`;
