/* eslint-disable @next/next/link-passhref */
import { VFC } from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderComponent = styled.header`
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

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

export const Header: VFC = () => {
  return (
    <HeaderComponent>
      {NAV_ITEMS.map((item) => (
        <Link key={item.href} href={item.href}>
          <Anchor>{item.label}</Anchor>
        </Link>
      ))}
    </HeaderComponent>
  );
};
