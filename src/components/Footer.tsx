import { VFC } from "react";
import styled from "styled-components";

export const Footer: VFC = () => {
  const Footer = styled.footer`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return <Footer>next-sandbox</Footer>;
};
