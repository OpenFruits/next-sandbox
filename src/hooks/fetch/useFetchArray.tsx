import { API_URL } from "src/utils/const";
import useSWRImmutable from "swr/immutable";

const useFetchArray = (url: string) => {
  const { data, error } = useSWRImmutable(url);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

// posts
export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

export const usePostsByUserId = (id: number) => {
  return useFetchArray(`${API_URL}/posts?userId=${id}`);
};

// users
export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};

// comments
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const useCommentsByPostId = (id: number) => {
  return useFetchArray(`${API_URL}/comments?postId=${id}`);
};
