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
    <h2>Markdown pages</h2>
    { data.allMarkdownRemark.edges.map(({node},index) => (
      <div key={index}><p><i>{node.frontmatter.date}</i> - <strong><a href={node.fields.slug}>{node.frontmatter.title}</a></strong></p>
      <div dangerouslySetInnerHTML={{ __html: node.excerpt}} />
      </div>
    ))}
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
    allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "D.M.Y.")
          }
          excerpt(format: HTML)
          fields {
            slug
          }
        }
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
