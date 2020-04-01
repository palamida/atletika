import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavLink = props => (
  <Link to={props.to}>{props.children}</Link>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav className="main-nav">
    <NavLink to="/">Home page</NavLink>
      <NavLink to="/page-2/">Second page</NavLink>
      <NavLink to="/page-3/">Third page</NavLink>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
