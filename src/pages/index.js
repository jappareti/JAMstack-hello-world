import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi everyone 👋🏼</h1>
    <p>I'm <a href="https://www.jeffappareti.com">Jeff Appareti</a>, a front-end developer based in the Bay Area.</p>
    <p>This is my Gatsby site for the freeCodeCamp JAMstack Hackathon on Oct 27-28 2018.</p>
    <p>Looking forward to hacking with you all!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
