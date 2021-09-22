import useSWRImmutable from "swr/immutable";

export const usePost = (postId: number) => {
  const { data, error } = useSWRImmutable(
    postId ? `https://jsonplaceholder.typicode.com/posts/${postId}` : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
