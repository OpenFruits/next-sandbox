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
    <WriterName>
      Created by{" "}
      <Link href={`/users/${userId}`} passHref>
        <Anchor>{data.name}</Anchor>
      </Link>
    </WriterName>
  );
};

const WriterName = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Anchor = styled.a`
  &:hover {
    color: gray;
  }
`;
