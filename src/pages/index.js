import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="asia" />

    <a
      href="https://en.wikipedia.org/wiki/Asia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h1>ASIA</h1>
    </a>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      Asia (/ˈeɪʒə, ˈeɪʃə/ (About this soundlisten)) is Earth's largest and most
      populous continent, located primarily in the Eastern and Northern
      Hemispheres. It shares the continental landmass of Eurasia with the
      continent of Europe and the continental landmass of Afro-Eurasia with both
      Europe and Africa. Asia covers an area of 44,579,000 square kilometres
      (17,212,000 sq mi), about 30% of Earth's total land area and 8.7% of the
      Earth's total surface area. The continent, which has long been home to the
      majority of the human population, was the site of many of the first
      civilizations. Asia is notable for not only its overall large size and
      population, but also dense and large settlements, as well as vast barely
      populated regions. Its 4.5 billion people (as of June 2019) constitute
      roughly 60% of the world's population
    </div>
    <h3>{data.allMarkdownRemark.totalCount}</h3>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        <div>{node.excerpt}</div>
        <p>{node.frontmatter.date}</p>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          fields {
            slug
          }
          id
        }
      }
      totalCount
    }
  }
`
// <form
// name="country"
// method="post"
// data-netlify="true"
// data-netlify-honeypot="bot-field"
// >
// <input type="text" name="name" placeholder="name" />
// <button>submit</button>
// </form>