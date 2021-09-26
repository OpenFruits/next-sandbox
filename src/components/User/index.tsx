import { VFC } from "react";
import Head from "next/head";
import { useUser } from "src/hooks/fetch/useUser";
import styled from "styled-components";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";

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
        <H3>詳細</H3>
        <ul>
          <li>{`アカウント名：${data.username}`}</li>
          <li>{`メール：${data.email}`}</li>
          <li>{`電話番号：${data.phone}`}</li>
          <li>{`Webサイト：${data.website}`}</li>
          <li>{`住所：${data.address.city}`}</li>
          <li>{`勤務先：${data.company.name}`}</li>
        </ul>
        <H3>投稿</H3>
        <PostsByUserId userId={data.id} />
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

const H3 = styled.h3`
  padding: 1rem 0;
`;
