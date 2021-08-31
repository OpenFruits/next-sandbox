import { VFC } from "react";
import { useUsers } from "src/hooks/useFetchArray";
import Link from "next/link";

export const Users: VFC = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>データが空です</div>;

  return (
    <div>
      <ol>
        {data?.map((user: any) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{`${user.name} ${user.email}`}</a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
