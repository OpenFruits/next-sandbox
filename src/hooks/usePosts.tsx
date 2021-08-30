import useSWR from "swr";
import { Post } from "src/types/post";
import { fetcher } from "src/utils/fetcher";

export const usePosts = () => {
  const { data, error } = useSWR<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
