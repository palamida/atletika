import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Topbar from "../components/topbar"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <Topbar topbarMessage="Page 3" />
    <h1 style={{color:`purple`, fontSize:`150px`}}>Počeši nos</h1>
    <p>Welcome to page 3</p>
    <img src="https://source.unsplash.com/random/800x400" alt="" />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
