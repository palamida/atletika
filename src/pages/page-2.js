import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 {data.site.siteMetadata.title}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// const { site } = useStaticQuery(
//   graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//           description
//           author
//         }
//       }
//     }
//   `
// )

export default SecondPage
