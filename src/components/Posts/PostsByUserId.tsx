import { VFC } from "react";
import { usePostsByUserId } from "src/hooks/fetch/useFetchArray";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  userId: number;
};

export const PostsByUserId: VFC<Props> = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.userId);

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>データが空です</div>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {data?.map((post: any) => (
        <li key={post.id} style={{ padding: "0.5rem 0" }}>
          <Link href={`/posts/${post.id}`} passHref>
            <Anchor>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Anchor>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Anchor = styled.a`
  margin: 0.5rem 0;
  &:hover {
    color: gray;
  }
`;
