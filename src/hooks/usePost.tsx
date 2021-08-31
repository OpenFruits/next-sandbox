import useSWR from "swr";

export const usePost = (postId: number) => {
  const { data, error } = useSWR(
    postId ? `https://jsonplaceholder.typicode.com/posts/${postId}` : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
