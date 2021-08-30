import { useRouter } from "next/router";
import useSWR from "swr";
import { Post } from "src/types/post";
import { fetcher } from "src/utils/fetcher";

export const usePost = () => {
  const router = useRouter();

  const { data: post, error: postError } = useSWR<Post>(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  const { data: user, error: userError } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null,
    fetcher
  );

  return {
    post,
    user,
    error: postError || userError,
    isLoading: !user && !userError,
  };
};
