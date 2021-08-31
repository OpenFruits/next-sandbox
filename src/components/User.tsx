import { VFC } from "react";
import Head from "next/head";
import { useUser } from "src/hooks/useUser";
import styled from "styled-components";
import { PostsByUserId } from "./PostsByUserId";

const Article = styled.div`
  minheight: 100vh;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const User: VFC = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>{data.name}</title>
      </Head>
      <Article>
        <h1>{data.name}</h1>
        <h2>詳細</h2>
        <ul>
          <li>{data.username}</li>
          <li>{data.address.city}</li>
          <li>{data.phone}</li>
          <li>{data.website}</li>
          <li>{data.company.name}</li>
        </ul>
        <h2>投稿</h2>
        <PostsByUserId userId={data.id} />
      </Article>
    </div>
  );
};
