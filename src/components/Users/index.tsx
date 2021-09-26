import { VFC } from "react";
import { useUsers } from "src/hooks/fetch/useFetchArray";
import Link from "next/link";
import styled from "styled-components";

export const Users: VFC = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>データが空です</div>;

  return (
    <UserList>
      {data?.map((user: any) => (
        <li key={user.id} style={{ listStyle: "none" }}>
          <Link href={`/users/${user.id}`} passHref>
            <UserItem>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </UserItem>
          </Link>
        </li>
      ))}
    </UserList>
  );
};

const UserList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
`;

const UserItem = styled.a`
  display: block;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border-radius: 0.25rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
