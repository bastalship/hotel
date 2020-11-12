import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import bgLogin from './../../assets/images/bg-login.jpg';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: url(${bgLogin}) center center no-repeat;
    background-size: cover;
  }
`;

const Root = styled.div`
  max-width: 520px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
`;

function Page({ children }) {
  return (
    <Root>
      <GlobalStyle />
      {children}
    </Root>
  );
}

export default Page;
