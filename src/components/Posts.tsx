import { VFC, useCallback, useEffect, useState } from "react";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const Posts: VFC = () => {
  const [state, setState] = useState<{
    data: Post[];
    loading: boolean;
    error: Error | null;
  }>({
    data: [],
    loading: true,
    error: null,
  });

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました。");
      }
      const json = await res.json();
      setState((prevState) => {
        return {
          ...prevState,
          data: json,
          loading: false,
        };
      });
    } catch (error) {
      setState((prevState) => {
        return {
          ...prevState,
          loading: false,
          error,
        };
      });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) return <div>ローディング中</div>;

  if (state.error) return <div>{state.error?.message}</div>;

  if (state.data.length === 0) return <div>データが空です</div>;

  return (
    <div>
      <ol>
        {state.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};
