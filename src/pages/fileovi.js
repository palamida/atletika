import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Fileovi = ({data}) => (
        <Layout>
            <SEO title="popis fileova" />
            { data.allFile.edges.map(({node},index) => (
                <p key={index}>
                    {node.name}.{node.extension} ({node.childImageSharp.original.width}x{node.childImageSharp.original.height}px) {node.accessTime}
                    <hr/>
                </p>
            ))}
             </Layout>
)

export default Fileovi

export const query = graphql`
query {
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          accessTime(formatString: "d.M.Y.")
          extension
          sourceInstanceName
          size
          name
          childImageSharp {
            original {
              width
              height
            }
          }
        }
      }
    }
  }
`