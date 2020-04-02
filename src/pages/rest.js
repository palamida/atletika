import React from "react"
// import JSONData from "http://www.mala-barka.eu/hr/markacijerest.json"
// import JSONData from "../markacijerest.json"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JSONbuildtime = ({data}) => (
  <Layout>
  <SEO title="Page three" />
  <h1 style={{color:`purple`, fontSize:`100px`}}>JSON</h1>
  <p>Welcome to REST page</p><hr/>
  <ul>
  { data.allMarkacijerestJson.edges.map(({node},index) => (
                <li key={index}>
                    {node.title}            
                </li>
            ))}
    </ul>
  <br />

</Layout>
)
export default JSONbuildtime

export const queryjson = graphql`
query {
  allMarkacijerestJson(filter: {lokacija: {eq: "Krk"}}) {
    edges {
      node {
        title
        body
      }
    }
  }
}
`