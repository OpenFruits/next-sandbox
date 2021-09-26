import { VFC } from "react";
import Link from "next/link";
import { API_URL } from "src/utils/const";
import styled from "styled-components";
import useSWR from "swr";

export const UserByUserId: VFC<{ userId: number }> = ({ userId }) => {
  const { data, error } = useSWR(userId ? `${API_URL}/users/${userId}` : null);

  if (!data && !error) return <div>著者：ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <Link href={`/users/${userId}`}>
      <a>
        <WriterName>Created by {data.name}</WriterName>
      </a>
    </Link>
  );
};

const WriterName = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.5rem;
`;
