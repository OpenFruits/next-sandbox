import { VFC } from "react";
import useSWR from "swr";

type Props = {
  userId: number;
};

export const UserByUserId: VFC<Props> = (props) => {
  const { data, error } = useSWR(
    props.userId
      ? `https://jsonplaceholder.typicode.com/users/${props.userId}`
      : null
  );

  if (!data && !error) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  return <div>Created by {data.name}</div>;
};
