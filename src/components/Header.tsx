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
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const PageIcon = styled.p`
  text-align: center;
`;

const NAV_ITEMS = [
  { href: "/", icon: "📝", label: "Index" },
  { href: "/posts", icon: "💌", label: "Posts" },
  { href: "/users", icon: "👨🏻‍💻", label: "Users" },
  { href: "/comments", icon: "💬", label: "Comments" },
  { href: "/play", icon: "🎮", label: "Play" },
];

export const Header: VFC = () => {
  return (
    <HeaderComponent>
      {NAV_ITEMS.map((item) => (
        <Link key={item.href} href={item.href} passHref>
          <Anchor>
            <PageIcon>{item.icon}</PageIcon>
            {item.label}
          </Anchor>
        </Link>
      ))}
    </HeaderComponent>
  );
};
