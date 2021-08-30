import { VFC } from "react";
import styled from "styled-components";

const FooterComponent = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer: VFC = () => {
  return <FooterComponent>next-sandbox</FooterComponent>;
};
