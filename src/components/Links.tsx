import { VFC } from "react";
import { sp } from "../../styles/media";
import styled from "styled-components";

export const Links: VFC = () => {
  const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;
    ${sp`
        width: 20px;
        height: 20px;
    `}
  `;

  const Card = styled.a`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 45%;

    &:hover,
    &:focus,
    &:active {
      color: #0070f3;
      border-color: #0070f3;
    }

    h2 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }

    p {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1.5;
    }
  `;

  return (
    <Grid>
      <Card href="https://nextjs.org/docs">
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </Card>

      <Card href="https://nextjs.org/learn">
        <h2>Learn &rarr;</h2>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </Card>

      <Card href="https://github.com/vercel/next.js/tree/master/examples">
        <h2>Examples &rarr;</h2>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </Card>

      <Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
        <h2>Deploy &rarr;</h2>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </Card>
    </Grid>
  );
};
