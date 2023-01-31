import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Error = () => {
  return (
    <Fragment>
      <Wrapper>
        <h1>
          Error 404: Kindly checkout other pages
          <span>This page is not active</span>
        </h1>

        <Link to="/">
          <button>Check this page out</button>
        </Link>
      </Wrapper>
    </Fragment>
  );
};

export default Error;
