import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import CookieConsent from 'react-cookie-consent'

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h3
          style={{
            ...scale(0.7),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
          className={'page-header'}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h3>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {`, `}
          <a href="https://reactjs.org/">React</a>
           {` and `} 
          <a href="https://www.netlify.com/">Netlify</a>
        </Footer>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          contentStyle={{flex: "1"}}
          style={{alignItems: "center"}}
          cookieName="gatsby-gdpr-google-analytics">
          {`This site uses cookies to enhance user experience `}
        </CookieConsent>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
