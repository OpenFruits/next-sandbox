import { VFC } from "react";
import Head from "next/head";
import { UserByUserId } from "src/components/User/UserByUserId";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import styled from "styled-components";
import { usePost } from "src/hooks/fetch/usePost";
import { useRouter } from "next/router";

export const Post: VFC = () => {
  const router = useRouter();
  const { data, isLoading, error } = usePost(Number(router.query.id));

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <PostTitle>{data?.title}</PostTitle>
      <PostBody>{data?.body}</PostBody>
      <UserByUserId userId={data?.userId} />
      <br />
      <h3>Comments</h3>
      <br />
      <CommentsByPostId postId={data?.id} />
    </>
  );
};

const PostTitle = styled.h1`
  padding: 0.5rem 0;
`;

const PostBody = styled.p`
  padding: 0.2rem 0 0.5rem;
  font-size: 1.5rem;
`;
