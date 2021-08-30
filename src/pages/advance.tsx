import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Header } from "src/components/Header";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
`;

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div>
        {posts.length > 0 ? (
          <ol>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ol>
        ) : null}
      </div>
    </Container>
  );
};

export default Home;
