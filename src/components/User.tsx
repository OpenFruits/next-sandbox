import { VFC } from "react";
import Head from "next/head";
import { useUser } from "src/hooks/fetch/useUser";
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
        <br />
        <h1>{data.name}</h1>
        <br />
        <h3>詳細</h3>
        <ul>
          <li>{`名前：${data.username}`}</li>
          <li>{`住所：${data.address.city}`}</li>
          <li>{`電話番号：${data.phone}`}</li>
          <li>{`Webサイト：${data.website}`}</li>
          <li>{`学校：${data.company.name}`}</li>
        </ul>
        <h3>投稿</h3>
        <PostsByUserId userId={data.id} />
      </Article>
    </div>
  );
};
