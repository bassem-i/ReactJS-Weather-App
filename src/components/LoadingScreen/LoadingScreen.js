import React from "react";
import styled from "styled-components";

const LoadingScreenDiv = styled.div`
  height: 100vh;
  position: relative;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default () => (
  <LoadingScreenDiv>
    <p>Loading...</p>
  </LoadingScreenDiv>
);
