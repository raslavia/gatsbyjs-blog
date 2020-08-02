import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
export default BlogPost
