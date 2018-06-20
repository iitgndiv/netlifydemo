import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";


const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  height: 60vh;
  overflow: hidden;
  position: relative;
  height: 70vh;
  h1 {
    img {
      height: 80px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display:flex;
  justify-content:space-between;
`;
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-2">About</Link>
        </li>
      </ul>
    </nav>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
