/* eslint-disable @next/next/link-passhref */
import { VFC } from "react";
import Link from "next/link";
import styled from "styled-components";

export const Header: VFC = () => {
  const Header = styled.header`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Anchor = styled.a`
    display: inline-block;
    padding: 8px 24px;
    font-size: 1.2rem;
    &:hover,
    &:focus,
    &:active {
      color: #0070f3;
      border-color: #0070f3;
    }
  `;

  return (
    <Header>
      <Link href="/">
        <Anchor>Index</Anchor>
      </Link>
      <Link href="/about">
        <Anchor>About</Anchor>
      </Link>
    </Header>
  );
};
