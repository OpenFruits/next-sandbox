import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const usePost = (postId: number) => {
  const { data, error } = useSWR(
    postId ? `https://jsonplaceholder.typicode.com/posts/${postId}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
